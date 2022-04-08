import { Component, OnInit } from '@angular/core';
import {DeckService} from "../../../services/deck.service";
import {deckModel} from "../../../models/deck.model";

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css']
})
export class DeckListComponent implements OnInit {
  decks: deckModel[] = [];

  constructor(
    private deckService: DeckService
  ) { }

  ngOnInit(): void {
  // this.deckService.getDecks()
    this.deckService.getDecks().subscribe(deck => {
      for(let i = 0 ; i < deck.results.length; i++) {
        this.decks.push(deck.results[i])
      }
    })
  }

  deleteRow(id: number, name: string) {
    if(confirm("Are you sure to delete deck: " + name)) {
      this.deckService.deleteDeck(String(id)).subscribe(deck => {})
      for(let i = 0; i < this.decks.length; ++i){
        if (this.decks[i]._id === id) {
          this.decks.splice(i,1);
        }
      }
    }
  }

}
