import { Injectable } from '@angular/core';
import {cardModel} from "../models/card.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  readonly cards: cardModel[] = []

  constructor(
    private http: HttpClient
  ) { }

  getCards(): cardModel[] {
    console.log("getCards aangeroepen");
    return this.cards;
  }

  getCardsBySetName(setName: String): cardModel[] {
    console.log("getCardsBySetName aangeroepen");
    let cardArr:cardModel[] = [];

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    this.http.get<any>(environment.apiString + "/card/" + setName, httpOptions).subscribe(data => {
      for (let i = 0; i < data.results.length; i++) {
        let card = new cardModel(
          Number(data.results[i].id),
          data.results[i].name,
          data.results[i].type,
          data.results[i].desc,
          data.results[i].race,
          String(setName),
          data.results[i].card_sets[0].set_code,
          data.results[i].card_images[0].image_url_small,
          data.results[i].card_images[0].image_url)
          cardArr.push(card)
      }
    })

    return cardArr;
  }

  //TODO: Get the details of a card in a collection by their card Id
  getCardById(id: number): cardModel {
    console.log("getCardById aangeroepen");
    return this.cards.filter((card) => card.id === id)[0];
  }
}
