import { Controller, Get, Post, Body, Param, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() createUser: CreateUserDto) {
    return this.usersService.create(createUser);
  }

  @Post('login')
  async login(@Param() user: LoginUserDto) {
    return this.usersService.login(user);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':email')
  async findOne(@Param('email') email: string) {
    return this.usersService.findOne(email);
  }
}
