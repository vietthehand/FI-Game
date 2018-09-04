import { Injectable } from '@angular/core';
import { PlayerStore } from './player.store';
import { CreatePlayer } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private playerStore: PlayerStore) {}

  Reset() {
    this.playerStore.update(CreatePlayer());
  }
}
