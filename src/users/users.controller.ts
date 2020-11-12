import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post()
  async create(@Body() createUser: CreateUserDto) {
    return this.usersService.create(createUser);
  }

  @Post('login')
  async login(@Body() user: LoginUserDto) {
    return this.authService.validateUser(user.email, user.password);
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
