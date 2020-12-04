import mongoose, { Document } from 'mongoose';

export interface ScoreData extends Document {
  username: string;
  allPin: number;
  avg: string;
  userId: string;
  boardId: string;
  date: string;
  score: Score;
}

interface Score {
  firstGame: string;
  secondGame: string;
  thirdGame: string;
  fourGame: string;
}
