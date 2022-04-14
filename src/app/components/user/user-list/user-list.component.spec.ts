// import { ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { UserListComponent } from './user-list.component';
// import {UserService} from "../../../services/user.service";
// import {FormsModule} from "@angular/forms";
// import {of} from "rxjs";
// import {userModel} from "../../../models/user.model";
// import {HttpClientTestingModule} from "@angular/common/http/testing";
// import {HttpClient, HttpClientModule} from "@angular/common/http";
// import {RouterTestingModule} from "@angular/router/testing";
//
// describe('UserListComponent', () => {
//   let component: UserListComponent;
//   let fixture: ComponentFixture<UserListComponent>;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ UserListComponent ],
//       imports: [RouterTestingModule, HttpClientTestingModule ]
//     })
//     .compileComponents();
//   });
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(UserListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
//
// describe('UserlistComponent', () => {
//   let component: UserListComponent;
//   let fixture: ComponentFixture<UserListComponent>;
//   let userService: any;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [FormsModule],
//       declarations: [UserListComponent],
//       providers: [{
//         provide: userService,
//         useValue: {
//           getUsers: () => of(usersData)
//         }
//       }]
//     }).compileComponents();
//   });
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(UserListComponent);
//     fixture.detectChanges()
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should have userModel[] from UserService', () => {
//     expect(component.users).toEqual(usersData)
//   })
// });
//
// const usersData: userModel[] = [
//   {
//     id: 0,
//     firstname: 'Jim',
//     lastname: 'van Zuidam',
//     username: 'SwiftGale',
//     email: 'jimvanzuidam@hotmail.nl',
//     password: '',
//     creationDate: new Date("2021-11-12"),
//     collections: [],
//     trades: [],
//     decks: []
//   },
//   {
//     id: 1,
//     firstname: 'Henk',
//     lastname: 'Grol',
//     username: 'GekkeHenkie',
//     email: 'Abc@email.nl',
//     password: '',
//     creationDate: new Date("2021-11-12"),
//     collections: [],
//     trades: [],
//     decks: []
//   },
//   {
//     id: 2,
//     firstname: 'Japie',
//     lastname: 'Jo',
//     username: 'JoJoJapie',
//     email: 'Test@company.com',
//     password: '',
//     creationDate: new Date("2021-11-12"),
//     collections: [],
//     trades: [],
//     decks: []
//   },
//   {
//     id: 3,
//     firstname: 'Arie',
//     lastname: 'Beterband',
//     username: 'Arie123',
//     email: 'Bitterbal@email.com',
//     password: '',
//     creationDate: new Date("2021-11-12"),
//     collections: [],
//     trades: [],
//     decks: []
//   },
//   {
//     id: 4,
//     firstname: 'Lisa',
//     lastname: 'Den hogen',
//     username: 'Lisa321',
//     email: 'Avans@student.nl',
//     password: '',
//     creationDate: new Date("2021-11-12"),
//     collections: [],
//     trades: [],
//     decks: []
//   },
// ]
