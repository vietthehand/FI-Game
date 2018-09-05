import { Injectable } from '@angular/core';

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
    const money$ = this.playerQuery.money$;

    money$.subscribe(money =>
      this.playerStore.update({ money: money + amount })
    );
  }
}
