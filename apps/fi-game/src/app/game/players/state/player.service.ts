import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

import { InvestmentsStore } from '../../investments/state/investments.store';
import { BudgetItem, CreatePlayer } from './player.model';
import { PlayerQuery } from './player.query';
import { PlayerStore } from './player.store';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(
    private playerStore: PlayerStore,
    private playerQuery: PlayerQuery,
    private investmentStore: InvestmentsStore
  ) {}

  reset() {
    this.playerStore.update(CreatePlayer());
    this.investmentStore.set([]);
  }

  addMoney(amount: number) {
    const money$ = this.playerQuery.money$.pipe(take(1));

    money$.subscribe(money =>
      this.playerStore.update({ money: money + amount })
    );
  }

  addToBudget(item: BudgetItem) {
    const budget$ = this.playerQuery.budget$.pipe(take(1));

    budget$.subscribe(budget => {
      this.playerStore.update({ budget: [...budget, item] });
    });
  }
}
