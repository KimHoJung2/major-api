import * as mongoose from 'mongoose';

export const usersSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    sex: String,
    password: String,
    created: Date,
  },
  { versionKey: false },
);
