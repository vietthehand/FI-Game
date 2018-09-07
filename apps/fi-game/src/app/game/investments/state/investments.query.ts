import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { map } from 'rxjs/operators';

import { Investment } from './investment.model';
import { InvestmentsState, InvestmentsStore } from './investments.store';

@Injectable({
  providedIn: 'root'
})
export class InvestmentsQuery extends QueryEntity<
  InvestmentsState,
  Investment
> {
  constructor(protected store: InvestmentsStore) {
    super(store);
  }

  totalValue$ = this.selectAll().pipe(
    map(investments =>
      investments.map(investment => investment.price * investment.amount)
    ),
    map(investment => investment.reduce((acc, val) => acc + val, 0))
  );
}
