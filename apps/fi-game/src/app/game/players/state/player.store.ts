import { Injectable } from '@angular/core';
import { Player, CreatePlayer } from './player.model';
import { StoreConfig, Store } from '@datorama/akita';
export const initialState: Player = CreatePlayer();

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'player'
})
export class PlayerStore extends Store<Player> {
  constructor() {
    super(initialState);
  }
}
