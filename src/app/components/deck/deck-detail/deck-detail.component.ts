import {Component, OnDestroy, OnInit} from '@angular/core';
import {cardModel} from "../../../models/card.model";
import {deckModel} from "../../../models/deck.model";
import {ActivatedRoute} from "@angular/router";
import {DeckService} from "../../../services/deck.service";
import {CardService} from "../../../services/card.service";

@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.css']
})
export class DeckDetailComponent implements OnInit {
  deckId: string | null = null;
  cards: cardModel | null = null;
  deck: deckModel | any;

  mainDeck: cardModel[] = [];
  extraDeck: cardModel[] = [];
  sideDeck: cardModel[] = []

  constructor(
    private route: ActivatedRoute,
    private deckService: DeckService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.deckId = params.get('id')
    })
    this.deck = this.deckService.getDeckById(String(this.deckId)).subscribe( deck => this.deck = deck.results[0])
  }


}
