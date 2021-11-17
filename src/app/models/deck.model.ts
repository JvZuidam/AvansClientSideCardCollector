import {cardModel} from "./card.model";

export class deckModel {
  id: number = 0;
  deckName: string = '';
  numberOfCards: number = 0;
  mainDeck: cardModel[];
  extraDeck: cardModel[];
  sideDeck: cardModel[];
  creationDate: Date;


  constructor(id: number, deckName: string, numberOfCards: number, mainDeck: cardModel[], extraDeck: cardModel[], sideDeck: cardModel[]) {
    this.id = id;
    this.deckName = deckName;
    this.numberOfCards = numberOfCards;
    this.mainDeck = mainDeck;
    this.extraDeck = extraDeck;
    this.sideDeck = sideDeck;
    this.creationDate = new Date();
  }
}
