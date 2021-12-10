import { Injectable } from '@angular/core';
import {collectionModel} from "../models/collection.model";
import {CardService} from "./card.service";
import {cardModel} from "../models/card.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  readonly collections: collectionModel[] = []
  constructor(
    private cardService: CardService,
    private http: HttpClient,
  ) { }


  getCollections() {
    console.log("getCollections aangeroepen");
    return this.http.get<any>(environment.apiString + "/collection", this.httpOptions).pipe(tap(_ => console.log(_)))
  }

  getCollectionCards(id: number): cardModel[] {
    console.log("getCollectionCards aangeroepen");
    return this.collections.filter((collection) => collection._id === id)[0].cards;

  }

  getCollectionById(id: string) {
    console.log("getCollectionById aangeroepen");
    return this.http.get<any>(environment.apiString + "/collection/" + id, this.httpOptions).pipe(tap(_ => console.log(_)))
  }

  createNewCollection(collectionName: string, setName: string) {
    console.log("createNewCollection aangeroepen");
    return this.http.post<any>(environment.apiString + "/collection/new", {userId: "61b0a3c0bd8abed432fe8a08", collectionName: collectionName, setName: setName})
  }
}
