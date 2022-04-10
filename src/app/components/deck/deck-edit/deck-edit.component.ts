import { Component, OnInit } from '@angular/core';
import {deckModel} from "../../../models/deck.model";
import {ActivatedRoute, Router} from "@angular/router";
import {DeckService} from "../../../services/deck.service";
import {cardModel} from "../../../models/card.model";
import {CardService} from "../../../services/card.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";


@Component({
  selector: 'app-deck-edit',
  templateUrl: './deck-edit.component.html',
  styleUrls: ['./deck-edit.component.css']
})
export class DeckEditComponent implements OnInit {

  deckId: string | null = null;
  deck: deckModel | any;
  cardList: cardModel[] = [];
  deckname: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deckService: DeckService,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.cardList = this.cardService.getCardsBySetName("Burst of Destiny");
    this.route.paramMap.subscribe((params) => {
      this.deckId = params.get("id")

      if (this.deckId) {
        //Deck exists
        this.deck = this.deckService.getDeckById(String(this.deckId)).subscribe( deck => this.deck = deck.results[0])
      }
    })
  }

  drop(event: CdkDragDrop<cardModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  onSubmit(deckName: string) {
    console.log(deckName);
    console.log("Deck bewerkingen opslaan aangeroepen");
    this.deckService.updateDeck(this.deck._id, deckName, this.deck.mainDeck, this.deck.extraDeck, this.deck.sideDeck).subscribe();
    this.router.navigate(['..'], {relativeTo: this.route});
  }

  back() {
    this.router.navigate(['..'], {relativeTo: this.route})
  }
}
