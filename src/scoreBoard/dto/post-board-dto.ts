import { ApiProperty } from '@nestjs/swagger';

export class PostScoreBoardDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  key: number;

  @ApiProperty()
  text: string;
}
