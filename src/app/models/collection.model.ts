import {setModel} from "./set.model";
import {cardModel} from "./card.model";

export class collectionModel {
  id: number = 0;
  collectionName: string = '';
  collectionSetName: string = '';
  creationDate: Date;
  numberOfCards: number = 0;
  cards: cardModel[];


  constructor(id: number, collectionName: string, collectionSetName: string, numberOfCards: number, cards: cardModel[]) {
    this.id = id;
    this.collectionName = collectionName;
    this.collectionSetName = collectionSetName;
    this.creationDate = new Date();
    this.numberOfCards = numberOfCards;
    this.cards = cards
  }
}
