import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

import { InvestmentsQuery } from '../investments/state/investments.query';
import { InvestmentsService } from '../investments/state/investments.service';
import { PlayerQuery } from './state/player.query';
import { PlayerService } from './state/player.service';

@Component({
  selector: 'fi-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  player$ = this.playerQuery.player$;
  money$ = this.playerQuery.money$;
  incomes$ = this.playerQuery.incomes$;
  expenses$ = this.playerQuery.expenses$;
  currentDate$ = this.playerQuery.currentDate$;
  displayedColumns: string[] = ['description', 'cost', 'date'];
  investments$ = this.investmentsQuery.selectAll();
  netWorth$ = this.playerQuery.netWorth$;

  constructor(
    private playerQuery: PlayerQuery,
    private playerService: PlayerService,
    private investmentService: InvestmentsService,
    private investmentsQuery: InvestmentsQuery
  ) {}

  ngOnInit() {
    interval(3000).subscribe(() => this.updateInvestmentPrice());
  }

  buyInvestment() {
    this.investmentService.buyInvestment(
      {
        id: 1,
        amount: 0,
        name: 'spy',
        price: 10
      },
      1
    );
  }

  sellInvestment() {
    this.investmentService.sellInvestment(
      {
        id: 1,
        amount: 0,
        name: 'spy',
        price: 10
      },
      1
    );
  }

  updateInvestmentPrice() {
    this.investmentService.updateInvestmentPrice(
      {
        id: 1,
        amount: 0,
        name: 'spy',
        price: 10
      },
      Math.floor(Math.random() * 20)
    );
  }

  updateMoney() {
    this.playerService.addMoney(10);
  }

  reset() {
    this.playerService.reset();
  }

  buyCoffee() {
    this.currentDate$.pipe(take(1)).subscribe(date => {
      const coffee = {
        description: 'Coffee',
        cost: -5,
        date: date
      };

      this.playerService.addToBudget(coffee);
      this.playerService.addMoney(coffee.cost);
    });
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
