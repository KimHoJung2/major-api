import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'auth/auth.service';
import { JwtAuthGuard } from 'auth/guard/jwt-auth.guard';
import { CreateUserDto } from './dto/create-users.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UsersService } from './users.service';

@Controller('user')
@ApiTags('user')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post()
  async create(@Body() createUsersDto: CreateUserDto) {
    //console.log(createUsersDto);
    return this.usersService.create(createUsersDto);
  }

  //@UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/abc')
  async abc(@Body() aaa: string) {
    return 'aaa';
  }
}
