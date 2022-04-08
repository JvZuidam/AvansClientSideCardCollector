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
    this.collectionService.getCollections().subscribe(collection => {
      for (let i = 0; i < collection.results.length; i++) {
        this.collections.push(collection.results[i])
      }
    });
  }

  deleteRow(id: number, name: string){
    if(confirm("Are you sure to delete collection: " + name)) {
      this.collectionService.deleteCollection(String(id), "").subscribe(deck => {})
      for(let i = 0; i < this.collections.length; ++i){
        if (this.collections[i]._id === id) {
          this.collections.splice(i,1);
        }
      }
    }
  }
}
