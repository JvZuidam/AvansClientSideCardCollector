import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {cardModel} from "../../../models/card.model";
import {CardService} from "../../../services/card.service";

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  card: cardModel | any;
  constructor(
    private cardService: CardService,
    public dialogRef: MatDialogRef<CardDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {  }

  ngOnInit(): void {
    this.card = this.cardService.getCardById(String(this.data.id)).subscribe(card => this.card = card)
  }

}
