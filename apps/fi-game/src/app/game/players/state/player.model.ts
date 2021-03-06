import * as moment from 'moment';

export interface Player {
  job: string;
  money: number;
  startDate: moment.Moment;
  currentTime: moment.Moment;
  budget: BudgetItem[];
}

export interface BudgetItem {
  cost: number;
  description: string;
  date: moment.Moment;
}

export function CreatePlayer() {
  const now = moment().startOf('day');
  // moment
  //   .utc('2013-10-29T00:00:00+00:00')
  //   .startOf('day')
  //   .format('LL')
  return {
    job: '',
    money: 0,
    startDate: now,
    currentTime: now,
    budget: []
  };
}
