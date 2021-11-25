import { Injectable } from '@angular/core';
import {collectionModel} from "../models/collection.model";
import {CardService} from "./card.service";
import {SetService} from "./set.service";
import {cardModel} from "../models/card.model";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  readonly collections: collectionModel[] = [
    {
      id: 0,
      userId: '0',
      collectionName: "Collection1",
      collectionSetName: "Burst Of Destiny",
      creationDate: new Date(),
      numberOfCards: 50,
      //TODO: Eventually change this to contain the cards in the actual database
      cards: this.cardService.getCardsBySetName("Burst of Destiny")
    },
    {
      id: 1,
      userId: '0',
      collectionName: "Collection2",
      collectionSetName: "Dawn Of Majesty",
      creationDate: new Date(),
      numberOfCards: 51,
      cards: this.cardService.getCardsBySetName("Dawn of Majesty")
    }]
  constructor(
    private cardService: CardService,
  ) { }


  getCollections(): collectionModel[] {
    console.log("getCollections aangeroepen");
    return this.collections;
  }

  getCollectionCards(id: number): cardModel[] {
    console.log("getCollectionCards aangeroepen");
    return this.collections.filter((collection) => collection.id === id)[0].cards;

  }

  getCollectionById(id: number): collectionModel {
    console.log("getCollectionById aangeroepen");
    return this.collections.filter((collection) => collection.id === id)[0]
  }
}
