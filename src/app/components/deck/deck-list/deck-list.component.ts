import { Component, OnInit } from '@angular/core';
import {DeckService} from "../../../services/deck.service";

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css']
})
export class DeckListComponent implements OnInit {

  constructor(
    private deckService: DeckService
  ) { }

  ngOnInit(): void {
  this.deckService.getDecks()
  }

}
