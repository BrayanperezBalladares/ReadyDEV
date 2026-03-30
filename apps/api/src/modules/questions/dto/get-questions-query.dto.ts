export class GetQuestionsQueryDto {
  type?: 'behavioral' | 'technical';
  role?: 'fullstack';
  difficulty?: 'junior';
  limit?: number;
}
