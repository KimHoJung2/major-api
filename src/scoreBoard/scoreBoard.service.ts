import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { GetScoreDto } from './dto/get-score-dto';
import { PostScoreBoardDto } from './dto/post-board-dto';
import { UpdateScoreBoardDto } from './dto/update-board-dto';
import { ScoreBoard } from './schema/scoreBoard.interface';
import { ScoreData } from './schema/scoreData.interface';

@Injectable()
export class ScoreBoardService {
  constructor(
    @Inject('SCORE_BOARD_MODEL')
    private scoreBoardModel: Model<ScoreBoard>,

    @Inject('MAIN_SCORE_DATA_MODEL')
    private scoreDataModel: Model<ScoreData>,
  ) {}

  async find(skip: number) {
    return await this.scoreBoardModel
      .find()
      .sort({ key: -1 })
      .limit(10)
      .skip(skip);
  }

  async postScoreBoard(postScoreBoard: PostScoreBoardDto): Promise<void> {
    const createScoreBoard = new this.scoreBoardModel(postScoreBoard);
    createScoreBoard.close = false;
    createScoreBoard.created = new Date();
    createScoreBoard.save();
    return;
  }

  async updateScoreBoard(updateScoreBoard: UpdateScoreBoardDto): Promise<void> {
    await this.scoreBoardModel.updateOne(
      { _id: updateScoreBoard.id },
      updateScoreBoard,
    );
    return;
  }

  async getScore(getScoreDto: GetScoreDto) {
    const { id } = getScoreDto;
    return await this.scoreDataModel.find({ boardId: id });
  }
}
