import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { Player } from './player.model';
import { PlayerStore } from './player.store';

@Injectable({
  providedIn: 'root'
})
export class PlayerQuery extends Query<Player> {
  player$ = this.select(player => player);
  money$ = this.select(player => player.money);
  budget$ = this.select(player => player.budget);
  expenses$ = this.select(player =>
    player.budget.filter(item => item.cost < 0)
  );
  incomes$ = this.select(player => player.budget.filter(item => item.cost > 0));

  constructor(protected store: PlayerStore) {
    super(store);
  }
}
