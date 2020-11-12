import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    console.log(user);
    if (user && user.password === password) {
      const { email, username, sex } = user;
      return {
        email: email,
        username: username,
        sex: sex,
      };
    }
    return null;
  }
}
