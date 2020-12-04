import * as mongoose from 'mongoose';

export const AttendUserSchema = new mongoose.Schema(
  {
    username: String,
    boardId: mongoose.Schema.Types.ObjectId,
  },
  {
    versionKey: false,
  },
);
