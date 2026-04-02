import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { GetQuestionsQueryDto } from './dto/get-questions-query.dto';

@Injectable()
export class QuestionsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: GetQuestionsQueryDto) {
    return this.prisma.question.findMany({
      where: {
        ...(query.type && { type: query.type }),
        ...(query.role && { role: query.role }),
        ...(query.difficulty && { difficulty: query.difficulty }),
        isActive: true,
      },
      take: query.limit ? Number(query.limit) : undefined,
    });
  }
}
