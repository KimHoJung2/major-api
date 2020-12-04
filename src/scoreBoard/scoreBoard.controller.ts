import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'auth/guard/jwt-auth.guard';
import { GetScoreBoardDto } from './dto/get-board-dto';
import { GetScoreDto } from './dto/get-score-dto';
import { PostScoreBoardDto } from './dto/post-board-dto';
import { UpdateScoreBoardDto } from './dto/update-board-dto';
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

  @Post()
  async postScoreBoard(@Body() postScoreBoardDto: PostScoreBoardDto) {
    return this.scoreBoardService.postScoreBoard(postScoreBoardDto);
  }

  @Post('/update')
  async updateScoreBoard(@Body() updateScoreBoardDto: UpdateScoreBoardDto) {
    return this.scoreBoardService.updateScoreBoard(updateScoreBoardDto);
  }

  @Get('/score')
  async getScore(@Query() getScoreDto: GetScoreDto) {
    return this.scoreBoardService.getScore(getScoreDto);
  }
}
