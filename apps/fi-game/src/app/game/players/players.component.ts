import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

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

  reset() {
    this.playerService.reset();
  }

  buyCoffee() {
    this.playerService.addToBudget({
      description: 'Coffee',
      cost: -5,
      date: moment()
    });
  }

  goToJob() {
    this.playerService.addToBudget({
      description: 'Job',
      cost: 150,
      date: moment()
    });
  }
}
