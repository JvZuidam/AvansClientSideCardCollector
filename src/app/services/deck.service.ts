import { Injectable } from '@angular/core';
import {deckModel} from "../models/deck.model";
import {CardService} from "./card.service";
import {retry, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {cardModel} from "../models/card.model";


@Injectable({
  providedIn: 'root'
})
export class DeckService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  readonly decks: deckModel[] = [];

  constructor(
    private cardService: CardService,
    private http: HttpClient
  ) { }

  getDecks() {
    console.log('getDecks aangeroepen');
    return this.http.get<any>(environment.apiString + "/deck", this.httpOptions).pipe(tap(_ => console.log(_)))
  }

  getDeckById(id: string) {
    console.log("getDeckById aangeroepen");
    return this.http.get<any>(environment.apiString + "/deck/" + id, this.httpOptions).pipe(tap(_ => console.log(_)))
  }

  createNewDeck(userId: string, deckName: string, mainDeck: cardModel[], extraDeck: cardModel[], sideDeck: cardModel[]) {
    console.log("createNewDeck aangeroepen");
    return this.http.post<any>(environment.apiString + "/deck/new", {userId: userId, deckName: deckName, mainDeck: mainDeck, extraDeck: extraDeck, sideDeck: sideDeck})
  }

  deleteDeck(id: string, userId: string) {
    console.log("deleteDeck aangeroepen");
    return this.http.delete<any>(environment.apiString + "/deck/" + id, this.httpOptions).pipe(tap( _ => console.log(_)))
  }

  updateDeck(id: string, deckName: string, mainDeck: cardModel[], extraDeck: cardModel[], sideDeck: cardModel[]) {
    console.log(deckName);
    console.log("UpdateDeck aangeroepen");
    return this.http.put<any>(environment.apiString + "/deck/" + id, {deckName: deckName, mainDeck: mainDeck, extraDeck: extraDeck, sideDeck: sideDeck}, this.httpOptions)
  }
}
