import { Document, Error } from 'mongoose';

export interface User extends Document {
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly sex: string;
  readonly created: Date;
}
