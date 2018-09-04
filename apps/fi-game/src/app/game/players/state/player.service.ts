import { Injectable } from '@angular/core';
import { PlayerStore } from './player.store';
import { CreatePlayer } from './player.model';
import { PlayerQuery } from './player.query';
import { map, take } from 'rxjs/operators';

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
    const money$ = this.playerQuery.player$.pipe(
      map(val => val.money),
      take(1)
    );

    money$.subscribe(money =>
      this.playerStore.update({ money: money + amount })
    );
  }
}
