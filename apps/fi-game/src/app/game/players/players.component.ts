import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { interval } from 'rxjs';
import { filter, scan, take } from 'rxjs/operators';

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
  constructor(
    private playerQuery: PlayerQuery,
    private playerService: PlayerService,
    private investmentService: InvestmentsService,
    private investmentsQuery: InvestmentsQuery
  ) {}

  player$ = this.playerQuery.player$;
  money$ = this.playerQuery.money$;
  incomes$ = this.playerQuery.incomes$;
  expenses$ = this.playerQuery.expenses$;
  currentDate$ = this.playerQuery.currentDate$;
  displayedColumns: string[] = ['description', 'cost', 'date'];
  investments$ = this.investmentsQuery.selectAll();
  netWorth$ = this.playerQuery.netWorth$;

  numberOfYears = 0;

  // lineChart
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  ];
  public lineChartLabels: Array<any> = [
    '20',
    '19',
    '18',
    '17',
    '16',
    '15',
    '14',
    '13',
    '12',
    '11',
    '10',
    '9',
    '8',
    '7',
    '6',
    '5',
    '4',
    '3',
    '2',
    '1'
  ];
  public lineChartOptions: any = {
    responsive: true
  };

  public lineChartType: string = 'line';

  ngOnInit() {
    interval(500).subscribe(() => {
      this.updateInvestmentPrice();
      this.numberOfYears++;
    });

    // this.netWorth$.pipe(bufferCount(20, 1)).subscribe(val => {
    //   this.lineChartData = [{ data: val, label: 'netWorth' }];
    // });

    this.netWorth$
      .pipe(
        scan((acc, val) => {
          acc.push(val);
          return acc.slice(-20);
        }, [])
      )
      .subscribe(val => {
        this.lineChartData = [{ data: val, label: 'netWorth' }];
      });
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
    this.investmentsQuery
      .selectEntity(1)
      .pipe(
        take(1),
        filter(val => val !== undefined)
      )
      .subscribe(investment => {
        const newPrice =
          investment.price * (1 + this.randomIntFromInterval(-10, 15) / 100);
        this.investmentService.updateInvestmentPrice(
          {
            id: 1,
            amount: 0,
            name: 'spy',
            price: 10
          },
          newPrice
        );
      });
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

  private randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
