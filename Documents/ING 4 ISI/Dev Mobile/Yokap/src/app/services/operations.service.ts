import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class OperationsService {

  transactions: any[] = [];
  private _storage: Storage | null = null;
  constructor(private storage: Storage) { }

  // async init() {
  //   If using, define drivers here: await this.storage.defineDriver(/*...*/);
  //   const storage = await this.storage.create();
  //   this._storage = storage;
  // }

  // public async set(key: string, value: any) {
  //   let result = this._storage?.set(key, value);
  //   console.log(result);
  // }

  // public async get(key: string) {
  //   let value = this._storage?.get(key);
  //   console.log(value);
  //   return value;
  // }

  // ajouterTransaction(transaction: any) {
  //   this.transactions.push(transaction);
  // }

  // getTransactions() {
  //   return this.transactions;
  // }

}
