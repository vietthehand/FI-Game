import { ID } from '@datorama/akita';

export interface Investment {
  id: ID;
  amount: number;
  name: string;
  price: number;
}

/**
 * A factory function that creates Investments
 */
export function createInvestment(params: Partial<Investment>) {
  return {

  } as Investment;
}
