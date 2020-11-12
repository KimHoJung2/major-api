import { Module } from '@nestjs/common';
import { usersProviders } from './users.providers';

@Module({
  providers: [...usersProviders],
  exports: [...usersProviders],
})
export class UserModule {}
