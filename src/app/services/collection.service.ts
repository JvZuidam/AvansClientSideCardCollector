import { Injectable } from '@angular/core';
import {collectionModel} from "../models/collection.model";
import {CardService} from "./card.service";
import {cardModel} from "../models/card.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable, tap} from "rxjs";

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

 createNewCollection(collectionName: string, setName: string) {
    console.log("createNewCollection aangeroepen");
    return this.http.post<any>(environment.apiString + "/collection/new", {userId: localStorage.getItem("userid"), collectionName: collectionName, setName: setName})
  }

  getCollections() {
    console.log("getCollections aangeroepen");
    return this.http.get<any>(environment.apiString + "/collection/" + localStorage.getItem("userid"), this.httpOptions).pipe(tap(result => console.log(result)))
  }

  getCollectionCards(id: number): cardModel[] {
    console.log("getCollectionCards aangeroepen");
    return this.collections.filter((collection) => collection._id === id)[0].cards;

  }

  getCollectionById(id: string) {
    console.log("getCollectionById aangeroepen");
    return this.http.get<any>(environment.apiString + "/collection/" + localStorage.getItem("userid") + "/" + id, this.httpOptions).pipe(tap(result => console.log(result)))
  }

  deleteCollection(id: string, userId: string) {
    console.log("deleteCollection aangeroepen");
    return this.http.delete<any>(environment.apiString + "/collection/" + localStorage.getItem("userid") + "/" + id, this.httpOptions).pipe(tap(result => console.log(result)))
  }

  updateCollection(id: string, collectionName: string, locked: boolean) {
    console.log("updateCollection aangeroepen");
    return this.http.put<any>(environment.apiString + "/collection/" + localStorage.getItem("userid") + "/" + id, {collectionName: collectionName, locked: locked}, this.httpOptions)
  }

  updateObtainedCard(collectionId: string, cardId: string, obtainedValue: boolean) {
    console.log("updateObtainedCard aangeroepen");
    return this.http.put<any>(environment.apiString + "/collection/card/" + collectionId + "/" + cardId, {obtainedValue: obtainedValue}, this.httpOptions)

  }
}
