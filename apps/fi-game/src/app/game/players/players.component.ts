import { Component, OnInit } from '@angular/core';
import { PlayerQuery } from './state/player.query';

@Component({
  selector: 'fi-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  player$;
  constructor(private playerQuery: PlayerQuery) {}

  ngOnInit() {
    this.player$ = this.playerQuery.player$;
  }
}
