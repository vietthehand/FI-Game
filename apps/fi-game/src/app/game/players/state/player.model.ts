import { ID } from '@datorama/akita';
import * as moment from 'moment';

export interface Player {
  id: ID;
  job: string;
  money: number;
  startDate: moment.Moment;
}

export function CreatePlayer() {
  return {
    id: 'test',
    job: '',
    money: 0,
    startDate: moment()
  };
}
