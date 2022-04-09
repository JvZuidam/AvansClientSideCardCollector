import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TradeService} from "../../../services/trade.service";
import {CardService} from "../../../services/card.service";
import {UserService} from "../../../services/user.service";
import {DeckService} from "../../../services/deck.service";
import {deckModel} from "../../../models/deck.model";
import {userModel} from "../../../models/user.model";
import {cardModel} from "../../../models/card.model";
import {CollectionService} from "../../../services/collection.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-trade-new',
  templateUrl: './trade-new.component.html',
  styleUrls: ['./trade-new.component.css']
})
export class TradeNewComponent implements OnInit {
  ownCards: any;
  otherCards: any;
  users: any;

  userId: any;
  userName: any;
  cardTradeId: any;
  cardTradeName: any;
  cardReceiveId: any;
  cardReceiveName: any;

  constructor(
    private http: HttpClient,
    private tradeService: TradeService,
    private cardService: CardService,
    private collectionService: CollectionService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router


  ) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers().subscribe(event => this.users = event);
    this.ownCards = this.cardService.getCardsBySetName("Burst of Destiny")
    this.otherCards = this.cardService.getCardsBySetName("Dawn of Majesty")
  }

  onSubmit() {
    this.tradeService.createTrade("SwiftGale", this.userId, this.userName, this.cardTradeId, this.cardTradeName, this.cardReceiveId, this.cardReceiveName).subscribe()
    this.router.navigate(['..'],{relativeTo: this.route});
  }


  onChangeUser($event: any) {
    this.userId = $event._id;
    this.userName = $event.username;
  }

  onChangeOtherCard($event: any) {
    this.cardTradeId = $event.id;
    this.cardTradeName = $event.name;
  }

  onChangeOwnCard($event: any) {
    this.cardReceiveId = $event.id;
    this.cardReceiveName = $event.name;
  }
}
