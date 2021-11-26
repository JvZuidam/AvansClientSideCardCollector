import { Component, OnInit } from '@angular/core';
import {collectionModel} from "../../../models/collection.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CollectionService} from "../../../services/collection.service";

@Component({
  selector: 'app-collection-edit',
  templateUrl: './collection-edit.component.html',
  styleUrls: ['./collection-edit.component.css']
})
export class CollectionEditComponent implements OnInit {
  locked: any;
  collectionId: string | null = null;
  collection: collectionModel | null = null;
  UpdatedCollection: any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private collectionService: CollectionService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.collectionId = params.get('id')

      if (this.collectionId) {
        //Collection exists
        this.collection = this.collectionService.getCollectionById(Number(this.collectionId))
        this.UpdatedCollection = this.collection;
      }
    });
  }

  onSubmit() {
    console.log("Collection bewerking opslaan aangeroepen");
    this.router.navigate(['..'], {relativeTo: this.route});
  }

  onChange(newValue: boolean) {
    console.log(newValue);
    this.UpdatedCollection.locked = newValue;
  }
}
