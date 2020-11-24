import { Connection } from 'mongoose';
import { ScoreBoardSchema } from './schema/scoreBoard.schema';

export const scoreBoardProviders = [
  {
    provide: 'SCORE_BOARD_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('main_attend_board_datas', ScoreBoardSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
