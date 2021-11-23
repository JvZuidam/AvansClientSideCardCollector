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
}
