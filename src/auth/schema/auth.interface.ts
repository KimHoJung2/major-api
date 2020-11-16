import mongoose, { Document } from 'mongoose';

export class Token extends Document {
  private readonly userId: mongoose.Schema.Types.ObjectId;
  private readonly access_token: string;
  private readonly ttl: number;
  private readonly created: Date;
}
