import { Controller, Post, Body, Param, Patch } from '@nestjs/common';
import { InterviewsService } from './interviews.service';
import { CreateInterviewDto } from './dto/create-interview.dto';
import { CreateInterviewAnswerDto } from './dto/create-interview-answer.dto';

@Controller('interviews')
export class InterviewsController {
  constructor(private readonly interviewsService: InterviewsService) {}

  @Post()
  create(@Body() dto: CreateInterviewDto) {
    return this.interviewsService.create(dto);
  }

  @Post(':id/answers')
  addAnswer(@Param('id') id: string, @Body() dto: CreateInterviewAnswerDto) {
    return this.interviewsService.addAnswer(id, dto);
  }

  @Patch(':id/complete')
  complete(@Param('id') id: string) {
    return this.interviewsService.complete(id);
  }
}
