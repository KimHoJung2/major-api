import { ApiProperty } from '@nestjs/swagger';

export class UpdateScoreBoardDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  key: number;

  @ApiProperty()
  text: string;
}
