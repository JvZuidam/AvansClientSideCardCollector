import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {cardModel} from "../../../models/card.model";
import {CardService} from "../../../services/card.service";
import {deckModel} from "../../../models/deck.model";
import {DeckService} from "../../../services/deck.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-deck-new',
  templateUrl: './deck-new.component.html',
  styleUrls: ['./deck-new.component.css']
})
export class DeckNewComponent implements OnInit {

  cardList: cardModel[] = [];
  mainDeck: cardModel[] = [];
  extraDeck: cardModel[] = [];
  sideDeck: cardModel[] = [];
  deck: deckModel = new deckModel(0, "", "", 0, [],[],[])


  constructor(
    private deckService: DeckService,
    private cardService: CardService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.cardList = this.cardService.getCardsBySetName("Burst of Destiny");
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
    this.deckService.createNewDeck(deckName, this.mainDeck, this.extraDeck, this.sideDeck).subscribe()
    this.router.navigate(['..'], {relativeTo: this.route});
  }
}
