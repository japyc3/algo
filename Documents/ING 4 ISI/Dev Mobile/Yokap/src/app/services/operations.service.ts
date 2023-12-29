import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  transactions: any[] = [];

  constructor() { }

  ajouterTransaction(transaction: any) {
    this.transactions.push(transaction);
  }

  getTransactions() {
    return this.transactions;
  }
  
}
