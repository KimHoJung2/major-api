import { Connection } from 'mongoose';
import { ScoreBoardSchema } from './schema/scoreBoard.schema';
import { ScoreDataSchema } from './schema/scoreData.schema';

export const scoreBoardProviders = [
  {
    provide: 'SCORE_BOARD_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('main_attend_board_datas', ScoreBoardSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'MAIN_SCORE_DATA_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('main_score_datas', ScoreDataSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
