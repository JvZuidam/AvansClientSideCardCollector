import { Injectable } from '@angular/core';
import {deckModel} from "../models/deck.model";
import {CardService} from "./card.service";
import {retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  readonly decks: deckModel[] = [
    {
      id: 0,
      userId: '5',
      deckName: 'Deck 1',
      numberOfCards: 50,
      mainDeck: this.cardService.getCards(),
      extraDeck: this.cardService.getCardsBySetName('Burst of Destiny'),
      sideDeck: this.cardService.getCardsBySetName('Dawn of Majesty'),
      creationDate: new Date('2021-11-12')
    }
  ];

  constructor(
    private cardService: CardService
  ) { }

  getDecks(): deckModel[] {
    console.log('getDecks aangeroepen');
    console.log(this.decks);
    return this.decks;
  }

  getDeckById(id: number): deckModel {
    console.log("getDeckById aangeroepen");
    return this.decks.filter((deck) => deck.id === id)[0]
  }

  createNewDeck(deck: deckModel) {
    console.log("createNewDeck aangeroepen");
    this.decks.push(deck);
  }
}
