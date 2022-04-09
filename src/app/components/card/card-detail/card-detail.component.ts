import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {cardModel} from "../../../models/card.model";
import {CardService} from "../../../services/card.service";
import {CollectionService} from "../../../services/collection.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  card: any;
  collectionId: any
  obtained: any


  constructor(
    private cardService: CardService,
    private collectionService: CollectionService,
    public dialogRef: MatDialogRef<CardDetailComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {  }

  ngOnInit(): void {

    this.card = this.cardService.getCardById(String(this.data.id))

    this.collectionId = this.data.collectionId;
    this.obtained = this.data.obtained;
    this.card = this.cardService.getCardById(String(this.data.id)).subscribe(card => this.card = card)

  }

  changeCheckBox(event: any, cardId: any) {
    this.collectionService.updateObtainedCard(this.collectionId, String(cardId), event.target.checked).subscribe()
    //This way of reloading works but it's kinda messy
    this.router.navigate(['/collections/' + this.collectionId])
      .then(() => {
        window.location.reload();
      });
  }
}
