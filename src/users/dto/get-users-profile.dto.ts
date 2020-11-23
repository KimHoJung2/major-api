import { ApiProperty } from '@nestjs/swagger';

export class GetUserProfileDto {
  @ApiProperty()
  token: string;
}
