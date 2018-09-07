import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Investment } from './investment.model';

export interface InvestmentsState extends EntityState<Investment> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'investments' })
export class InvestmentsStore extends EntityStore<InvestmentsState, Investment> {

  constructor() {
    super();
  }

}

