import { Connection } from 'mongoose';
import { AuthSchema } from './schema/auth.schema';

export const authProviders = [
  {
    provide: 'TOKEN_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('auth', AuthSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
