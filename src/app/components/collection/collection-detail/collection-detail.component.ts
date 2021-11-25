import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CollectionService} from "../../../services/collection.service";
import {CardService} from "../../../services/card.service";
import {collectionModel} from "../../../models/collection.model";
import {cardModel} from "../../../models/card.model";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Subject, takeUntil} from "rxjs";
import {CardDetailComponent} from "../../card/card-detail/card-detail.component";

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css']
})
export class CollectionDetailComponent implements OnInit, OnDestroy {
  collectionId: string | null = null;
  cards: cardModel | null = null;
  collection: collectionModel | null = null;

  destroy = new Subject();
  currentDialog: MatDialogRef<CardDetailComponent> | null = null;

  constructor(
    private route: ActivatedRoute,
    private collectionService: CollectionService,
    private cardService: CardService,
    private matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.collectionId = params.get('id');
      this.collection = this.collectionService.getCollectionById(Number(this.collectionId));
    })

  }

  ngOnDestroy() {
    this.destroy.next(true);
  }

  openCardDetail(id: number) {
      this.currentDialog = this.matDialog.open(CardDetailComponent, {
        data: { id: id }
      });
      this.currentDialog.afterClosed().subscribe(result => {
        console.log("The dialog was closed");
      });
  }
}
