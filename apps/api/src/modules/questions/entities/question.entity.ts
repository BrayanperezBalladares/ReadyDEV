export type QuestionType = 'behavioral' | 'technical';
export type QuestionRole = 'fullstack';
export type QuestionDifficulty = 'junior';

export class QuestionEntity {
  id: string;
  type: QuestionType;
  role: QuestionRole;
  category: string;
  content: string;
  difficulty: QuestionDifficulty;
  isActive: boolean;
  createdAt: Date;
}
