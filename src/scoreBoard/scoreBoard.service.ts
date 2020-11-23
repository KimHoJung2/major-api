import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ScoreBoard } from './schema/scoreBoard.interface';

@Injectable()
export class ScoreBoardService {
  constructor(
    @Inject('SCORE_BOARD_MODEL')
    private scoreBoardModel: Model<ScoreBoard>,
  ) {}

  async find(skip: number) {
    console.log(skip);
    return await this.scoreBoardModel
      .find()
      .sort({ key: -1 })
      .limit(10)
      .skip(skip);
  }
}
