import { Document } from 'mongoose';

export interface Users extends Document {
  username: string;
  email: string;
  password: string;
  sex: string;
  created: Date;
}
