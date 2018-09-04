import { Component, OnInit } from '@angular/core';
import { PlayerQuery } from './state/player.query';
import { PlayerService } from './state/player.service';

@Component({
  selector: 'fi-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  player$ = this.playerQuery.player$;

  constructor(
    private playerQuery: PlayerQuery,
    private playerService: PlayerService
  ) {}

  ngOnInit() {}

  updateMoney() {
    this.playerService.addMoney(10);
  }
}
