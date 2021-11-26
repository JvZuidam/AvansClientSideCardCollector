import { Component, OnInit } from '@angular/core';
import {SetService} from "../../../services/set.service";
import {CollectionService} from "../../../services/collection.service";
import {collectionModel} from "../../../models/collection.model";
import {CardService} from "../../../services/card.service";
import {cardModel} from "../../../models/card.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-collection-new',
  templateUrl: './collection-new.component.html',
  styleUrls: ['./collection-new.component.css']
})
export class CollectionNewComponent implements OnInit {
  setName: any;
  collection: collectionModel = new collectionModel(0, "", "", "", 0, [])
  setNames: string[] = [];

  constructor(
    private setService: SetService,
    private collectionService: CollectionService,
    private cardService: CardService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setNames = this.setService.getSetNames();
  }

  onSubmit(collectionName: string) {
    //Save the collection
    this.collectionService.createNewCollection(
      new collectionModel(3, '3', collectionName, this.setName, 600, this.cardService.getCardsBySetName(this.setName))
    )
    this.router.navigate(['..'], {relativeTo: this.route});

  }
}
