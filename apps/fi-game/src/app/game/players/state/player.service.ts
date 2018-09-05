import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

import { CreatePlayer } from './player.model';
import { PlayerQuery } from './player.query';
import { PlayerStore } from './player.store';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(
    private playerStore: PlayerStore,
    private playerQuery: PlayerQuery
  ) {}

  reset() {
    this.playerStore.update(CreatePlayer());
  }

  addMoney(amount: number) {
    const money$ = this.playerQuery.money$.pipe(take(1));

    money$.subscribe(money =>
      this.playerStore.update({ money: money + amount })
    );
  }
}
