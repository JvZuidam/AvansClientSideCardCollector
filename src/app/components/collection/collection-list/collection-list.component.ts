import { Component, OnInit } from '@angular/core';
import {collectionModel} from "../../../models/collection.model";
import {CollectionService} from "../../../services/collection.service";

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {
  collections: collectionModel[] = [];
  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.collections = this.collectionService.getCollections();
  }

}
