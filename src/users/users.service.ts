import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto, CustomError } from './dto/create-users.dto';
import { User } from './schema/users.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_MODEL')
    private userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(createUserDto);
    return this.findOne(createUserDto.email).then((res) => {
      if (res) {
        throw new CustomError(200, '이미있는 아이디다', 'AC800');
      }
      return createUser.save();
    });
  }

  async findOne(email: string): Promise<User> {
    return this.userModel.findOne({ email: email });
  }
}
