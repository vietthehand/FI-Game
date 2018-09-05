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
  incomes$ = this.playerQuery.incomes$;
  expenses$ = this.playerQuery.expenses$;

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
    const coffee = {
      description: 'Coffee',
      cost: -5,
      date: moment()
    };

    this.playerService.addToBudget(coffee);
    this.playerService.addMoney(coffee.cost);
  }

  goToJob() {
    const job = {
      description: 'Job',
      cost: 150,
      date: moment()
    };

    this.playerService.addToBudget(job);
    this.playerService.addMoney(job.cost);
  }
}
