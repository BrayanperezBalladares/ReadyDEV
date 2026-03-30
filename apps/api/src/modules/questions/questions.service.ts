import { Injectable } from '@nestjs/common';
import { QuestionEntity } from './entities/question.entity';
import { GetQuestionsQueryDto } from './dto/get-questions-query.dto';

@Injectable()
export class QuestionsService {
  private questions: QuestionEntity[] = [
    {
      id: '1',
      type: 'behavioral',
      role: 'fullstack',
      category: 'communication',
      content: 'Hablame de ti y de como llegaste al desarrollo de software',
      difficulty: 'junior',
      isActive: true,
      createdAt: new Date(),
    },
    {
      id: '2',
      type: 'technical',
      role: 'fullstack',
      category: 'javascript',
      content: 'Cuál es la diferencia entre == y === en JavaScript?',
      difficulty: 'junior',
      isActive: true,
      createdAt: new Date(),
    },
  ];

  findAll(query: GetQuestionsQueryDto): QuestionEntity[] {
    let result = this.questions;

    if (query.type) {
      result = result.filter((q) => q.type === query.type);
    }

    if (query.role) {
      result = result.filter((q) => q.role === query.role);
    }

    if (query.difficulty) {
      result = result.filter((q) => q.difficulty === query.difficulty);
    }

    if (query.limit) {
      result = result.slice(0, query.limit);
    }

    return result;
  }
}
