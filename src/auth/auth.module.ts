import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from 'auth/auth.service';
import { DatabaseModule } from 'commonDB/database.module';
import { usersProviders } from 'users/users.providers';
import { UsersService } from 'users/users.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: 86400000 },
    }),
  ],
  providers: [AuthService, UsersService, JwtStrategy, ...usersProviders],
  exports: [AuthService],
})
export class AuthModule {}
