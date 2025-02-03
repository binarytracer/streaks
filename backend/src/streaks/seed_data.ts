import { StateEnum, Streak } from './interfaces';
import { format, addDays } from 'date-fns';

const streaks: Streak[] = [
  {
    ...generateCase1(),
    id: 1,
  },
  {
    ...generateCase2(),
    id: 2,
  },
  {
    id: 3,
    ...generateCase3(),
  },
];

export default streaks;

function generateCase3(): Streak {
  const currentDate = new Date();
  return {
    activitiesToday: 1,
    total: 4, // total completed streaks from previous to current
    days: [
      {
        date: format(addDays(currentDate, 2), 'yyyy-MM-dd'),
        activities: 0,
        state: StateEnum.INCOMPLETE,
      },
      {
        date: format(addDays(currentDate, 1), 'yyyy-MM-dd'),
        activities: 0,
        state: StateEnum.INCOMPLETE,
      },
      {
        date: format(currentDate, 'yyyy-MM-dd'),
        activities: 1,
        state: StateEnum.AT_RISK,
      },
      {
        date: format(addDays(currentDate, -1), 'yyyy-MM-dd'),
        activities: 3,
        state: StateEnum.COMPLETED,
      },
      {
        date: format(addDays(currentDate, -2), 'yyyy-MM-dd'),
        activities: 0,
        state: StateEnum.SAVED,
      },
      {
        date: format(addDays(currentDate, -3), 'yyyy-MM-dd'),
        activities: 0,
        state: StateEnum.SAVED,
      },
      {
        date: format(addDays(currentDate, -4), 'yyyy-MM-dd'),
        activities: 1,
        state: StateEnum.COMPLETED,
      },
    ],
  };
}

function generateCase2(): Streak {
  const currentDate = new Date();
  return {
    activitiesToday: 1,
    total: 3, // total completed streaks from previous to current
    days: [
      {
        date: format(addDays(currentDate, 2), 'yyyy-MM-dd'),
        activities: 0,
        state: StateEnum.INCOMPLETE,
      },
      {
        date: format(addDays(currentDate, 1), 'yyyy-MM-dd'),
        activities: 0,
        state: StateEnum.INCOMPLETE,
      },
      {
        date: format(currentDate, 'yyyy-MM-dd'),
        activities: 1,
        state: StateEnum.COMPLETED,
      },
      {
        date: format(addDays(currentDate, -1), 'yyyy-MM-dd'),
        activities: 0,
        state: StateEnum.SAVED,
      },
      {
        date: format(addDays(currentDate, -2), 'yyyy-MM-dd'),
        activities: 0,
        state: StateEnum.SAVED,
      },
      {
        date: format(addDays(currentDate, -3), 'yyyy-MM-dd'),
        activities: 1,
        state: StateEnum.COMPLETED,
      },
      {
        date: format(addDays(currentDate, -4), 'yyyy-MM-dd'),
        activities: 1,
        state: StateEnum.COMPLETED,
      },
    ],
  };
}

function generateCase1(): Streak {
  const currentDate = new Date();
  return {
    activitiesToday: 3,
    total: 4, // total completed streaks from previous to current
    days: [
      {
        date: format(addDays(currentDate, 3), 'yyyy-MM-dd'),
        activities: 0,
        state: StateEnum.INCOMPLETE,
      },
      {
        date: format(addDays(currentDate, 2), 'yyyy-MM-dd'),
        activities: 0,
        state: StateEnum.INCOMPLETE,
      },
      {
        date: format(addDays(currentDate, 1), 'yyyy-MM-dd'),
        activities: 0,
        state: StateEnum.INCOMPLETE,
      },
      {
        date: format(currentDate, 'yyyy-MM-dd'),
        activities: 3,
        state: StateEnum.COMPLETED,
      },
      {
        date: format(addDays(currentDate, -1), 'yyyy-MM-dd'),
        activities: 0,
        state: StateEnum.INCOMPLETE,
      },
      {
        date: format(addDays(currentDate, -2), 'yyyy-MM-dd'),
        activities: 0,
        state: StateEnum.INCOMPLETE,
      },
      {
        date: format(addDays(currentDate, -3), 'yyyy-MM-dd'),
        activities: 1,
        state: StateEnum.COMPLETED,
      },
    ],
  };
}
