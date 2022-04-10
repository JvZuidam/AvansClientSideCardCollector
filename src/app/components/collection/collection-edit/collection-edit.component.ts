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
  collection: collectionModel | any;

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
        this.collection = this.collectionService.getCollectionById(String(this.collectionId)).subscribe( collection => this.collection = collection.results[0])
      }
    });
  }

  onSubmit(collectionName: string) {
    console.log("Collection bewerking opslaan aangeroepen");
    this.collectionService.updateCollection(this.collection._id, collectionName, this.locked).subscribe();
    this.router.navigate(['..'], {relativeTo: this.route});
  }

  onChange(newValue: boolean) {
    console.log(newValue);
    this.locked = newValue;
  }

  back() {
    this.router.navigate(['..'], {relativeTo: this.route})
  }
}
