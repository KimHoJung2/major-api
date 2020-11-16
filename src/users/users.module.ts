import { Module } from '@nestjs/common';
import { DatabaseModule } from 'commonDB/database.module';
import { usersProviders } from './users.providers';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthModule } from 'auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders],
  exports: [UsersService, ...usersProviders],
})
export class UsersModule {}
