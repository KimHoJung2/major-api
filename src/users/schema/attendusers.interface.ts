import { Document } from 'mongoose';

export interface AttendUser extends Document {
  readonly username: string;
  readonly boardId: string;
}
