import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'auth/auth.service';
import { JwtAuthGuard } from 'auth/guard/jwt-auth.guard';
import { CreateUserDto } from './dto/create-users.dto';
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
  async getUserProfile(@Query() params: { token: string }) {
    const email = await this.authService.tokenValidator(params);

    return this.usersService.getUserProFile(email['email']);
    // return this.usersService.findOne(this.jwtService.decode());
    //return this.usersService.findById(getUserProfileDto.id);
  }
}
