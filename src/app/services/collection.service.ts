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
      cards: this.cardService.getCardsBySetName("Burst of Destiny"),
      locked: false
    },
    {
      id: 1,
      userId: '0',
      collectionName: "Collection2",
      collectionSetName: "Dawn Of Majesty",
      creationDate: new Date(),
      numberOfCards: 51,
      cards: this.cardService.getCardsBySetName("Dawn of Majesty"),
      locked: false
    },
    {
      id: 2,
      userId: '0',
      collectionName: "Collection3",
      collectionSetName: "Burst of Destiny",
      creationDate: new Date(),
      numberOfCards: 150,
      cards: this.cardService.getCardsBySetName("Burst of Destiny"),
      locked: false
    },
    {
      id: 3,
      userId: '0',
      collectionName: "Collection4",
      collectionSetName: "Burst of Destiny",
      creationDate: new Date(),
      numberOfCards: 320,
      cards: this.cardService.getCardsBySetName("Burst of Destiny"),
      locked: true
    },
    {
      id: 4,
      userId: '0',
      collectionName: "Collection5",
      collectionSetName: "Dawn Of Majesty",
      creationDate: new Date(),
      numberOfCards: 101,
      cards: this.cardService.getCardsBySetName("Dawn of Majesty"),
      locked: true
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

  createNewCollection(collection: collectionModel) {
    console.log("createNewCollection aangeroepen");
    console.log(collection);
    this.collections.push(collection)
  }
}
