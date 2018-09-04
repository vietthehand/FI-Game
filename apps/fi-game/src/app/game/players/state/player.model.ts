import { ID } from '@datorama/akita';

export interface Player {
  id: ID;
  job: string;
  money: number;
}

export function CreatePlayer() {
  return {
    id: 'test',
    job: '',
    money: 0
  };
}
