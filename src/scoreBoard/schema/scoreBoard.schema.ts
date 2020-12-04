import * as mongoose from 'mongoose';

export const ScoreBoardSchema = new mongoose.Schema(
  {
    title: String,
    created: Date,
    name: String,
    close: Boolean,
    text: String,
    key: Number,
  },
  {
    versionKey: false,
  },
);
