import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InterviewSessionEntity } from './entities/interview-session.entity';
import { InterviewAnswerEntity } from './entities/interview-answer.entity';
import { CreateInterviewDto } from './dto/create-interview.dto';
import { CreateInterviewAnswerDto } from './dto/create-interview-answer.dto';
import { QuestionsService } from '../questions/questions.service';
import { QuestionEntity } from '../questions/entities/question.entity';

@Injectable()
export class InterviewsService {
  private sessions: InterviewSessionEntity[] = [];
  private answers: InterviewAnswerEntity[] = [];

  constructor(private readonly questionsService: QuestionsService) {}

  create(dto: CreateInterviewDto): {
    session: InterviewSessionEntity;
    questions: QuestionEntity[];
  } {
    const newSession: InterviewSessionEntity = {
      id: Date.now().toString(),
      role: dto.role,
      type: dto.type,
      status: 'in_progress',
      startedAt: new Date(),
      completedAt: null,
    };

    this.sessions.push(newSession);

    const questions = this.questionsService.findAll({
      type: dto.type,
      limit: 5,
    });

    return {
      session: newSession,
      questions,
    };
  }

  addAnswer(sessionId: string, dto: CreateInterviewAnswerDto) {
    const session = this.sessions.find((s) => s.id === sessionId);

    if (!session) {
      throw new NotFoundException(`Session with ID ${sessionId} not found`);
    }

    if (session.status === 'completed') {
      throw new BadRequestException(
        'Cannot add answers to a completed session',
      );
    }

    const newAnswer: InterviewAnswerEntity = {
      id: Date.now().toString(),
      sessionId,
      questionId: dto.questionId,
      answerText: dto.answerText,
      createdAt: new Date(),
    };

    this.answers.push(newAnswer);

    return newAnswer;
  }

  complete(sessionId: string) {
    const session = this.sessions.find((s) => s.id === sessionId);

    if (!session) {
      throw new NotFoundException(`Session with ID ${sessionId} not found`);
    }

    session.status = 'completed';
    session.completedAt = new Date();

    return session;
  }
}
