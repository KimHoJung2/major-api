import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'auth/guard/jwt-auth.guard';
import { GetScoreBoardDto } from './dto/get-board-dto';
import { ScoreBoardService } from './scoreBoard.service';

@Controller('scoreBoard')
@ApiTags('scoreBoard')
@ApiSecurity('access-token')
@UseGuards(JwtAuthGuard)
export class ScoreBoardController {
  constructor(private scoreBoardService: ScoreBoardService) {}

  @Get()
  async getScoreBoard(@Query() getScoreBoardDto: GetScoreBoardDto) {
    return this.scoreBoardService.find(parseInt(getScoreBoardDto.skip));
  }
}
