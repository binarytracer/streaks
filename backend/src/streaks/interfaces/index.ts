export enum StateEnum {
  INCOMPLETE = 'INCOMPLETE',
  SAVED = 'SAVED',
  AT_RISK = 'AT_RISK',
  COMPLETED = 'COMPLETED',
}

export interface DayActivity {
  date: string;
  activities: number;
  state: StateEnum;
}

export interface Streak {
  id?: number;
  activitiesToday: number;
  total: number;
  days: DayActivity[];
}
