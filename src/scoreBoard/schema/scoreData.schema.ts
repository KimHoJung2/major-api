import * as mongoose from 'mongoose';

export const ScoreDataSchema = new mongoose.Schema(
  {
    username: String,
    userId: mongoose.Types.ObjectId,
    boardId: mongoose.Types.ObjectId,
    date: String,
    allPin: Number,
    avg: String,
    score: Object,
  },
  {
    versionKey: false,
  },
);
