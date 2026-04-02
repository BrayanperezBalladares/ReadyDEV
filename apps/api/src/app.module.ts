import { Module } from '@nestjs/common';
import { QuestionsModule } from './modules/questions/question.module';
import { InterviewsModule } from './modules/interviews/interviews.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, QuestionsModule, InterviewsModule],
})
export class AppModule {}
