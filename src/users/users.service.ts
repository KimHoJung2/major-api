import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Users } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_MODEL')
    private usersModel: Model<Users>,
  ) {}

  // 유저 생성
  async create(createUser: CreateUserDto): Promise<Users> {
    const createdUsers = new this.usersModel(createUser);
    createdUsers.created = new Date();

    return this.findOne(createUser.email).then((res) => {
      if (res) {
        throw new Error('이미 등록된 아이디 입니다.');
      } else {
        return createdUsers.save();
      }
    });
  }

  async login(user: LoginUserDto): Promise<{ token: string }> {
    return;
    //return { token: user.email };
  }

  findAll() {
    return `This action returns all users`;
  }

  // 해당 email 유저 탐색
  async findOne(email: string): Promise<Users> {
    return await this.usersModel.findOne({ email: email }).then((res) => res);
  }
}
