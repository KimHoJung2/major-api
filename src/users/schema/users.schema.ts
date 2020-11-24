import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    created: Date,
    password: String,
    usertype: String,
  },
  {
    versionKey: false,
  },
);
