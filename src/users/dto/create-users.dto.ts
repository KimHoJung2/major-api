import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  sex: string;
}

export class CustomError extends Error {
  code: string;
  status: number;
  message: string;

  constructor(status: number, message: string, code: string) {
    super();
    this.status = status;
    this.message = message;
    this.code = code;
  }
}
