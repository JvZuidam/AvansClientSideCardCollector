import {collectionModel} from "./collection.model";
import {tradeModel} from "./trade.model";
import {deckModel} from "./deck.model";

export class userModel {
  id: number = 0;
  firstname: string = '';
  lastname: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  creationDate: Date | undefined;
  collections: collectionModel[] | null = null;
  trades: tradeModel[] | null = null;
  decks: deckModel[] | null = null;

  constructor(firstname: string, lastname: string, username: string, email: string, password: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.email = email;
    this.password = password;
  }

}



