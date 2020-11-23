import { ApiProperty, ApiParam } from '@nestjs/swagger';

export class GetScoreBoardDto {
  @ApiProperty()
  skip: string;
}
