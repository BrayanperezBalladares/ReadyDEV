export type InterviewStatus = 'in_progress' | 'completed';
export type InterviewType = 'behavioral' | 'technical';
export type InterviewRole = 'fullstack';

export class InterviewSessionEntity {
  id: string;
  role: InterviewRole;
  type: InterviewType;
  status: InterviewStatus;
  startedAt: Date;
  completedAt?: Date | null;
}
