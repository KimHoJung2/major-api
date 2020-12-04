import { ApiProperty } from '@nestjs/swagger';

export class GetScoreDto {
  @ApiProperty()
  id: string;
}
