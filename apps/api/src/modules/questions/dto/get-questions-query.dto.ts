/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsIn, IsInt, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class GetQuestionsQueryDto {
  @IsOptional()
  @IsIn(['behavioral', 'technical'])
  type?: string;

  @IsOptional()
  @IsIn(['fullstack'])
  role?: string;

  @IsOptional()
  @IsIn(['junior'])
  difficulty?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number;
}
