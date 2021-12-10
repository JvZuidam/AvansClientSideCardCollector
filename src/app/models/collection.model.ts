import {setModel} from "./set.model";
import {cardModel} from "./card.model";

export class collectionModel {
  _id: number = 0;
  userId: string = '';
  collectionName: string = '';
  collectionSetName: string = '';
  creationDate: Date;
  numberOfCards: number = 0;
  cards: cardModel[];
  locked: boolean = false;


  constructor(id: number, userId: string, collectionName: string, collectionSetName: string, numberOfCards: number, cards: cardModel[]) {
    this._id = id;
    this.userId = userId;
    this.collectionName = collectionName;
    this.collectionSetName = collectionSetName;
    this.creationDate = new Date();
    this.numberOfCards = numberOfCards;
    this.cards = cards;
  }
}
