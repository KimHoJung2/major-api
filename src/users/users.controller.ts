import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() createUsersDto: CreateUserDto) {
    return this.usersService.create(createUsersDto);
  }
}
