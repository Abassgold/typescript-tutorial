// classes
export class Invoice {
    // public client: string;
    // details: string;
    // private amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
    move() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
