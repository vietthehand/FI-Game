import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Player } from './player.model';
import { PlayerStore } from './player.store';

@Injectable({
  providedIn: 'root'
})
export class PlayerQuery extends Query<Player> {
  player$ = this.select(player => player);

  constructor(protected store: PlayerStore) {
    super(store);
  }
}
