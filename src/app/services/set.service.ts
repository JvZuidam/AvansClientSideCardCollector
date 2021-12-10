import { Injectable } from '@angular/core';
import {setModel} from "../models/set.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SetService {
  sets: setModel[] = []

  constructor(
    private http: HttpClient
  ) { }

  getSets(): setModel[] {
    console.log("getSets aangeroepen");
    let setArr:setModel[] = []

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    this.http.get<any>(environment.apiString + "/set", httpOptions).subscribe(data => {
      console.log(data);
      for (let i = 0; i < data.results.length; i++) {
        let set = new setModel(Number(data.results[i]._id), data.results[i].set_name, data.results[i].set_code, data.results[i].num_of_cards)
        setArr.push(set)
      }
    })
    return setArr
  }

  getSetById(id: number): setModel {
    console.log("getSetById aangeroepen");
    return this.sets.filter((set) => set.id === id)[0];
  }

  getSetNames(): string[] {
    console.log("getSetNames aangeroepen");

    let setNameArr:string[] = [];

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    this.http.get<any>(environment.apiString + "/set", httpOptions).subscribe(data => {
      for (let i = 0; i < data.results.length; i++) {
        setNameArr.push(data.results[i].set_name)
      }
    })
    return setNameArr
  }

  getNumberOfCardsInSet(setName: string): number {
    console.log("getNumberOfCardsInSet aangeroepen");
    return this.sets.filter((set) => set.setName == setName)[0].numberOfCards;
  }
}
