import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from 'auth/auth.service';
import { DatabaseModule } from 'commonDB/database.module';
import { usersProviders } from 'users/users.providers';
import { UsersService } from 'users/users.service';
import { authProviders } from './auth.providers';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: 86400000 },
    }),
  ],
  providers: [
    AuthService,
    UsersService,
    JwtStrategy,
    ...usersProviders,
    ...authProviders,
  ],
  exports: [AuthService],
})
export class AuthModule {}
