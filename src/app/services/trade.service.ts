import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DeckService} from "./deck.service";
import {CollectionService} from "./collection.service";
import {environment} from "../../environments/environment";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TradeService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(
    private deckService: DeckService,
    private collectionService: CollectionService,
    private http: HttpClient
  ) { }

  getTrades() {
    console.log("getTrades aangeroepen");
    return this.http.get<any>(environment.apiString + "/trade/" + localStorage.getItem("userid"), this.httpOptions).pipe(tap(result => console.log(result)))
  }

  getTradeById(id: string) {
    console.log("getTradeById aangeroepen");
    return this.http.get<any>(environment.apiString + "/trade/" + localStorage.getItem("userid") + "/" + id, this.httpOptions).pipe(tap(result => console.log(result)))
  }

  updateTrade(id: string, cardTradeName: string, cardTradeId: string, cardReceiveName: string, cardReceiveId: string) {
    console.log("updateTrade aangeroepen");
    return this.http.put<any>(environment.apiString + "/trade/" + localStorage.getItem("userid") + "/" + id, {cardToTrade: cardTradeId, cardTradeName: cardTradeName, cardToReceive: cardReceiveId, cardReceiveName: cardReceiveName}, this.httpOptions)
  }

  createTrade(traderName: string, tradeeId: string, tradeeName: string, cardTradeName: string, cardTradeId: string, cardReceiveName: string, cardReceiveId: string) {
    console.log("createTrade aangeroepen");
    return this.http.post<any>(environment.apiString + "/trade/new", {
      traderId: localStorage.getItem("userid"),
      traderName: traderName,
      tradeeId: tradeeId,
      tradeeName: tradeeName,
      cardToTrade: cardTradeId,
      cardTradeName: cardTradeName,
      cardToReceive: cardReceiveId,
      cardReceiveName: cardReceiveName
    }, this.httpOptions)
  }

  deleteTrade(id: string) {
    console.log("deleteTrade aangeroepen");
    return this.http.delete<any>(environment.apiString + "/trade/" + localStorage.getItem("userid") + "/" + id, this.httpOptions).pipe(tap(result => console.log(result)))
  }
}
