import {cardModel} from "./card.model";

export class deckModel {
  _id: number = 0;
  userId: string = '';
  deckName: string = '';
  numberOfCards: number = 0;
  mainDeck: cardModel[];
  extraDeck: cardModel[];
  sideDeck: cardModel[];
  creationDate: Date;


  constructor(id: number, userId: string, deckName: string, numberOfCards: number, mainDeck: cardModel[], extraDeck: cardModel[], sideDeck: cardModel[]) {
    this._id = id;
    this.userId = userId;
    this.deckName = deckName;
    this.numberOfCards = numberOfCards;
    this.mainDeck = mainDeck;
    this.extraDeck = extraDeck;
    this.sideDeck = sideDeck;
    this.creationDate = new Date();
  }
}
