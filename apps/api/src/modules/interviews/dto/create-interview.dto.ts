/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsIn, IsNotEmpty } from 'class-validator';

export class CreateInterviewDto {
  @IsNotEmpty()
  @IsIn(['fullstack'])
  role!: string;

  @IsNotEmpty()
  @IsIn(['behavioral', 'technical'])
  type!: string;
}
