import { Module } from '@nestjs/common';
import { ScoreBoardModule } from 'scoreBoard/scoreBoard.module';
import { UsersModule } from 'users/users.module';

@Module({
  imports: [UsersModule, ScoreBoardModule],
})
export class CommonModule {}
