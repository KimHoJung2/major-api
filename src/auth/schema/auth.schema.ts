import * as mongoose from 'mongoose';

export const AuthSchema = new mongoose.Schema(
  {
    userId: mongoose.Schema.Types.ObjectId,
    ttl: Number,
    access_token: String,
    created: Date,
  },
  {
    versionKey: false,
  },
);
