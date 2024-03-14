import { HasFormater, HasFormater1 } from './Interface/HasFormertter.js'
// classes
export class Invoice implements HasFormater, HasFormater1  {
  // public client: string;
  // details: string;
  // private amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) { }

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
  move() { 
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}
