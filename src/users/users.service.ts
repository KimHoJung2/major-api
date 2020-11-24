import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-users.dto';
import { CustomError } from 'responseError/customError';
import { User } from './schema/users.interface';
import { overlapEmail } from './usersError/error';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_MODEL')
    private userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User | undefined> {
    const createUser = new this.userModel({
      ...createUserDto,
      created: new Date(),
    });
    return this.findOne(createUserDto.email).then((res) => {
      if (res) {
        throw new CustomError(overlapEmail);
      }
      return createUser.save();
    });
  }

  async findOne(email: string): Promise<User> {
    return this.userModel.findOne({ email: email });
  }

  async findById(id: string): Promise<User> {
    console.log(id);
    return this.userModel.findById(id);
  }

  async getUserProFile(email: string): Promise<User> {
    return this.findOne(email);
  }
}
