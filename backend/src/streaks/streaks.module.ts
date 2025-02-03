import { Module } from '@nestjs/common';
import { StreaksService } from './streaks.service';
import { StreaksController } from './streaks.controller';

@Module({
  controllers: [StreaksController],
  providers: [StreaksService],
})
export class StreaksModule {}
