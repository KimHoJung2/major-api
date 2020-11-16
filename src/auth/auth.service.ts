import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'users/dto/login-user.dto';
import { CustomError } from 'responseError/customError';
import { emailError, passwordError } from './authError/error';
import { Model } from 'mongoose';
import { Token } from './schema/auth.interface';
import { TokenDto } from './dto/create-token.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,

    @Inject('TOKEN_MODEL')
    private tokenModel: Model<Token>,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (user && user.password === password) {
      const { email, username, id } = user;
      return {
        email: email,
        id: id,
        username: username,
      };
    }

    if (!user) {
      return emailError;
    }

    return passwordError;
  }

  async login(user: LoginUserDto) {
    const payload = { email: user.email };
    return this.validateUser(user.email, user.password).then((res) => {
      if (res.status) {
        throw new CustomError(res);
      }
      const id = res.id;
      return this.craeteToken({
        userId: id,
        access_token: this.jwtService.sign({ ...payload, id: id }),
        ttl: 86400000,
        created: new Date(),
      });
    });
  }

  async craeteToken(token: TokenDto) {
    const createToken = new this.tokenModel(token);
    return createToken.save();
  }
}
