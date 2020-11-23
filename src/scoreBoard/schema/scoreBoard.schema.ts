import * as mongoose from 'mongoose';

export const ScoreBoardSchema = new mongoose.Schema(
  {
    title: String,
    created: Date,
    name: String,
    close: Boolean,
    key: Number,
    boardId: mongoose.Schema.Types.ObjectId,
  },
  {
    versionKey: false,
  },
);
