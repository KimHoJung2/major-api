import { Module } from '@nestjs/common';
import { DatabaseModule } from 'commonDB/database.module';
import { ScoreBoardController } from './scoreBoard.controller';
import { scoreBoardProviders } from './scoreBoard.providers';
import { ScoreBoardService } from './scoreBoard.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ScoreBoardController],
  providers: [ScoreBoardService, ...scoreBoardProviders],
})
export class ScoreBoardModule {}
