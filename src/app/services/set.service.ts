import { Injectable } from '@angular/core';
import {setModel} from "../models/set.model";

@Injectable({
  providedIn: 'root'
})
export class SetService {
  sets: setModel[] = [
    {
      id: 50,
      setName: "Burst of Destiny",
      setCode: "BODE",
      numberOfCards: 101,
      releaseDate: new Date("2021-11-04")
    }
  ]

  constructor() { }

  getSets(): setModel[] {
    console.log("getSets aangeroepen");
    return this.sets;
  }

  getSetById(id: number): setModel {
    console.log("getSetById aangeroepen");
    return this.sets.filter((set) => set.id === id)[0];
  }

  getSetNames(): String[] {
    console.log("getSetNames aangeroepen");
    return this.sets.map(set => set.setName);
  }

  getCardsInSet(setName: string): number {
    console.log("getCardsInSet aangeroepen");
    return this.sets.filter((set) => set.setName == setName)[0].numberOfCards;
  }
}
