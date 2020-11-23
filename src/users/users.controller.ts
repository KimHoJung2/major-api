import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'auth/auth.service';
import { JwtAuthGuard } from 'auth/guard/jwt-auth.guard';
import { CreateUserDto } from './dto/create-users.dto';
import { GetUserProfileDto } from './dto/get-users-profile.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UsersService } from './users.service';

@Controller('user')
@ApiTags('user')
@ApiSecurity('access-token')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post()
  async create(@Body() createUsersDto: CreateUserDto) {
    return this.usersService.create(createUsersDto);
  }

  @Post('/login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Post('/logout')
  @UseGuards(JwtAuthGuard)
  async logout(@Request() req: any) {
    return 'aaaaa';
  }

  @Get('/profile')
  @UseGuards(JwtAuthGuard)
  async getUserProfile(@Request() a: any) {
    return 'asdfsaf';
    //return this.usersService.findById(getUserProfileDto.id);
  }
}
