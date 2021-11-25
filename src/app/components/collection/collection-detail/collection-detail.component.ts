import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CollectionService} from "../../../services/collection.service";
import {CardService} from "../../../services/card.service";
import {collectionModel} from "../../../models/collection.model";
import {cardModel} from "../../../models/card.model";

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css']
})
export class CollectionDetailComponent implements OnInit {
  collectionId: string | null = null;
  cards: cardModel | null = null;
  collection: collectionModel | null = null;

  constructor(
    private route: ActivatedRoute,
    private collectionService: CollectionService,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.collectionId = params.get('id');
      this.collection = this.collectionService.getCollectionById(Number(this.collectionId));
    })
  }

}
