import { Component, OnInit } from '@angular/core';
import {userModel} from "../../../models/user.model";

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  user: userModel = new userModel("","","","");
  checked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
  //Save the user
  }

}
