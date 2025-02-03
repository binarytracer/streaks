import { Injectable, NotFoundException } from '@nestjs/common';
import streaks from './seed_data';
import { Streak } from './interfaces';

@Injectable()
export class StreaksService {
  findAll(): Streak[] {
    return streaks;
  }

  findOne(id: number): Streak {
    const match = streaks.find((streak) => streak.id === id);

    if (!match) {
      throw new NotFoundException('Record not found');
    }

    return match;
  }
}
