import { Connection } from 'mongoose';
import { AttendUserSchema } from './schema/attendusers.schema';
import { UserSchema } from './schema/users.schema';

export const usersProviders = [
  {
    provide: 'USERS_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'ATTEND_USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('attendusers', AttendUserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
