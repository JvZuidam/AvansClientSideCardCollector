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
    return this.http.get<any>(environment.apiString + "/deck/" + localStorage.getItem("userid"), this.httpOptions).pipe(tap(result => console.log(result)))
  }

  getDecksForTrade(id: string): deckModel[] {
    console.log('getDecksForTrade aangeroepen');
    let deckArr: deckModel[] = [];

    this.http.get<any>(environment.apiString + "/deck/" + id, this.httpOptions).subscribe(data => {
      for (let i = 0; i < data.results.length; i++) {
      let deck = new deckModel(
        Number(data.results[i].id),
        data.results[i].userId,
        data.results[i].deckName,
        data.results[i].numberOfCards,
        data.results[i].mainDeck,
        data.results[i].extraDeck,
        data.results[i].sideDeck)
        deckArr.push(deck)
      }
    })
    return deckArr;
  }

  getDeckById(id: string) {
    console.log("getDeckById aangeroepen");
    return this.http.get<any>(environment.apiString + "/deck/" + localStorage.getItem("userid") + "/" + id, this.httpOptions).pipe(tap(result => console.log(result)))
  }

  createNewDeck(deckName: string, mainDeck: cardModel[], extraDeck: cardModel[], sideDeck: cardModel[]) {
    console.log("createNewDeck aangeroepen");
    return this.http.post<any>(environment.apiString + "/deck/new", {userId: localStorage.getItem("userid"), deckName: deckName, mainDeck: mainDeck, extraDeck: extraDeck, sideDeck: sideDeck})
  }

  deleteDeck(id: string) {
    console.log("deleteDeck aangeroepen");
    return this.http.delete<any>(environment.apiString + "/deck/" + localStorage.getItem("userid") + "/" + id, this.httpOptions).pipe(tap( result => console.log(result)))
  }

  updateDeck(id: string, deckName: string, mainDeck: cardModel[], extraDeck: cardModel[], sideDeck: cardModel[]) {
    console.log(deckName);
    console.log("UpdateDeck aangeroepen");
    return this.http.put<any>(environment.apiString + "/deck/" + localStorage.getItem("userid") + "/" + id, {deckName: deckName, mainDeck: mainDeck, extraDeck: extraDeck, sideDeck: sideDeck}, this.httpOptions)
  }
}
