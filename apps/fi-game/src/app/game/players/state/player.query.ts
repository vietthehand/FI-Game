import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { InvestmentsQuery } from '../../investments/state/investments.query';
import { Player } from './player.model';
import { PlayerStore } from './player.store';

@Injectable({
  providedIn: 'root'
})
export class PlayerQuery extends Query<Player> {
  constructor(
    protected store: PlayerStore,
    private investmentsQuery: InvestmentsQuery
  ) {
    super(store);
  }

  player$ = this.select(player => player);
  money$ = this.select(player => player.money);
  budget$ = this.select(player => player.budget);
  expenses$ = this.select(player =>
    player.budget.filter(item => item.cost < 0)
  );
  incomes$ = this.select(player =>
    player.budget.filter(item => item.cost >= 0)
  );
  currentDate$ = this.select(player => player.currentTime);

  netWorth$: Observable<number> = combineLatest(
    this.money$,
    this.investmentsQuery.totalValue$
  ).pipe(map(([money, investmentsValue]) => money + investmentsValue));
}
