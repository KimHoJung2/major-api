import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-users.dto';
import { UsersService } from './users.service';

@Controller('user')
@ApiTags('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() createUsersDto: CreateUserDto) {
    return this.usersService.create(createUsersDto);
  }
}
