import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateInterviewDto } from './dto/create-interview.dto';
import { CreateInterviewAnswerDto } from './dto/create-interview-answer.dto';
import { QuestionsService } from '../questions/questions.service';

@Injectable()
export class InterviewsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly questionsService: QuestionsService,
  ) {}

  async create(dto: CreateInterviewDto) {
    const session = await this.prisma.interviewSession.create({
      data: {
        role: dto.role,
        type: dto.type,
        status: 'in_progress',
      },
    });

    const questions = await this.questionsService.findAll({
      type: dto.type,
      limit: 5,
    });

    return { session, questions };
  }

  async addAnswer(sessionId: string, dto: CreateInterviewAnswerDto) {
    const session = await this.prisma.interviewSession.findUnique({
      where: { id: sessionId },
    });

    if (!session) {
      throw new NotFoundException(`Session with ID ${sessionId} not found`);
    }

    if (session.status === 'completed') {
      throw new BadRequestException(
        'Cannot add answers to a completed session',
      );
    }

    return this.prisma.interviewAnswer.create({
      data: {
        sessionId,
        questionId: dto.questionId,
        answerText: dto.answerText,
      },
    });
  }

  async complete(sessionId: string) {
    const session = await this.prisma.interviewSession.findUnique({
      where: { id: sessionId },
    });

    if (!session) {
      throw new NotFoundException(`Session with ID ${sessionId} not found`);
    }

    return this.prisma.interviewSession.update({
      where: { id: sessionId },
      data: {
        status: 'completed',
        completedAt: new Date(),
      },
    });
  }
}
