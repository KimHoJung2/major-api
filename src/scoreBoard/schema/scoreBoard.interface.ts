import mongoose, { Document } from 'mongoose';

export interface ScoreBoard extends Document {
  title: string;
  created: Date;
  name: string;
  close: boolean;
  text: string;
  key: number;
}
