import { ApiProperty } from '@nestjs/swagger';

export class GetScoreBoardDto {
  @ApiProperty()
  skip: string;
}
