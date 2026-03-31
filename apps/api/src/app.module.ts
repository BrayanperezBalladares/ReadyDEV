import { Module } from '@nestjs/common';
import { QuestionsModule } from './modules/questions/question.module';
import { InterviewsModule } from './modules/interviews/interviews.module';

@Module({
  imports: [QuestionsModule, InterviewsModule],
})
export class AppModule {}
