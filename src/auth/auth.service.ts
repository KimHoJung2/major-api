import { Injectable } from '@nestjs/common';
import { UsersService } from 'users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'users/dto/login-user.dto';
import { CustomError } from 'responseError/customError';
import { loginError } from './authError/error';
import { compare } from 'bcrypt';
import { GetUserProfileDto } from 'users/dto/get-users-profile.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (user && (await this.compareHash(password, user.password))) {
      const { email, username, id } = user;
      return {
        email: email,
        id: id,
        username: username,
      };
    }

    return loginError;
  }

  // TODO: 로그인이 한군데로 고정 하고싶다. ex) 로그인시에 디비에 데이터있을시 업뎃 해당유저의 아이디와 토큰을 db에 저장하고  api 미들웨어에서 해당 유저의 id와 토큰으로 2중 검사(토큰db userdb 같이 조회).
  // 로그아웃시 db에서 해당 토큰 제거xe
  // TODO: 비밀번호 오류 5번 계정비활성화 or 추가인증. 오류카운팅 ++

  async login(user: LoginUserDto) {
    const payload = { email: user.email };
    return this.validateUser(user.email, user.password).then(async (res) => {
      if (res.status) {
        throw new CustomError(res);
      }

      return {
        access_token: this.jwtService.sign({ ...payload }),
        expires: 86400000,
      };
    });
  }

  async tokenValidator(getUserProfileDto: GetUserProfileDto) {
    return this.jwtService.decode(getUserProfileDto.token);
  }

  async compareHash(
    password: string,
    hash: string | undefined,
  ): Promise<boolean> {
    return compare(password, hash);
  }
}
