import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-users.dto';
import { CustomError } from 'responseError/customError';
import { User } from './schema/users.interface';
import { overlapEmail } from './usersError/error';
import { AttendUser } from './schema/attendusers.interface';
import { AttendUserDto } from './dto/attend-user.dto';
import { attendError, deleteAttendError } from './error/userError';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_MODEL')
    private userModel: Model<User>,
    @Inject('ATTEND_USER_MODEL')
    private attendUserModel: Model<AttendUser>,
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

  async findAttendUser(boardId: any): Promise<AttendUser[]> {
    return this.attendUserModel.find({
      boardId: boardId,
    });
  }

  async findOne(email: string): Promise<User> {
    return this.userModel.findOne({ email: email }).then((res) => {
      return res;
    });
  }

  async findById(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async getUserProFile(email: string): Promise<User> {
    return this.findOne(email);
  }

  async postAttendUser(
    attendUserDto: AttendUserDto,
  ): Promise<AttendUser | void> {
    const createAttendUser = new this.attendUserModel(attendUserDto);
    const check = await this.attendCheck(attendUserDto);
    if (!check || check === null) {
      return createAttendUser.save();
    }

    throw new CustomError(attendError);
  }

  async postDeleteAttendUser(
    attendUserDto: AttendUserDto,
  ): Promise<AttendUser | void> {
    const check = await this.attendCheck(attendUserDto);

    if (!check || check === null) {
      throw new CustomError(deleteAttendError);
    }

    await this.attendUserModel.deleteOne(attendUserDto);

    return;
  }

  async attendCheck(attendUserDto: AttendUserDto): Promise<AttendUser | void> {
    return this.attendUserModel.findOne(attendUserDto).then((res) => res);
  }
}
