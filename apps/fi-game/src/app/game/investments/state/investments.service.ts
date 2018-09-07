import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';

import { PlayerQuery } from '../../players/state/player.query';
import { PlayerStore } from '../../players/state/player.store';
import { Investment } from './investment.model';
import { InvestmentsQuery } from './investments.query';
import { InvestmentsStore } from './investments.store';

@Injectable({ providedIn: 'root' })
export class InvestmentsService {
  constructor(
    private investmentsStore: InvestmentsStore,
    private investmentsQuery: InvestmentsQuery,
    private playerStore: PlayerStore,
    private playerQuery: PlayerQuery // private http: HttpClient
  ) {}

  buyInvestment(investment: Investment, amount: number) {
    combineLatest(
      this.playerQuery.money$,
      this.investmentsQuery.selectEntity(investment.id)
    )
      .pipe(take(1))
      .subscribe(([money, invest]) => {
        if (!invest) {
          invest = investment;
        }
        const totalCost = invest.price * amount;
        if (money >= totalCost) {
          const updatedInvestment = {
            ...invest,
            amount: invest.amount + amount
          };

          this.investmentsStore.createOrReplace(
            investment.id,
            updatedInvestment
          );

          this.playerStore.update({ money: money - totalCost });
        }
      });
  }

  sellInvestment(investment: Investment, amount: number) {
    combineLatest(
      this.playerQuery.money$,
      this.investmentsQuery.selectEntity(investment.id)
    )
      .pipe(take(1))
      .subscribe(([money, inv]) => {
        if (inv && inv.amount >= amount) {
          this.investmentsStore.createOrReplace(investment.id, {
            ...investment,
            amount: inv.amount - amount
          });

          const sellValue = amount * inv.price;
          this.playerStore.update({ money: money + sellValue });
        }
      });
  }

  get() {
    // this.http.get(url).subscribe((entities) => {
    // this.{investmentsStore.set(entities);
    // });
  }

  add() {
    // this.http.post().subscribe((entity) => {
    // this.{investmentsStore.add(entity);
    // });
  }
}
