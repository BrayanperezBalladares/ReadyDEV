import { Module } from '@nestjs/common';
import { QuestionsModule } from './modules/questions/question.module';

@Module({
  imports: [QuestionsModule],
})
export class AppModule {}
