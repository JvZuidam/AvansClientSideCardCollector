import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TradeService} from "../../../services/trade.service";
import {tradeModel} from "../../../models/trade.model";
import {CardService} from "../../../services/card.service";

@Component({
  selector: 'app-trade-edit',
  templateUrl: './trade-edit.component.html',
  styleUrls: ['./trade-edit.component.css']
})
export class TradeEditComponent implements OnInit {
  ownCards: any;
  otherCards: any;
  tradeId: string | null =null;
  trade: tradeModel | any;

  cardTradeId: any;
  cardTradeName: any;
  cardReceiveId: any;
  cardReceiveName: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tradeService: TradeService,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.tradeId = params.get('id')

      if (this.tradeId) {
        this.trade = this.tradeService.getTradeById(String(this.tradeId)).subscribe( trade => this.trade = trade.results[0])
      }
    })
    this.ownCards = this.cardService.getCardsBySetName("Burst of Destiny")
    this.otherCards = this.cardService.getCardsBySetName("Dawn of Majesty")
  }

  onSubmit() {
    this.tradeService.updateTrade(String(this.tradeId), this.cardTradeId, this.cardTradeName, this.cardReceiveId, this.cardReceiveName).subscribe();
    this.router.navigate(['..'], {relativeTo: this.route})
  }


  onChangeOtherCard($event: any) {
    this.cardReceiveId = $event.id;
    this.cardReceiveName = $event.name;

  }

  onChangeOwnCard($event: any) {
    this.cardTradeId = $event.id;
    this.cardTradeName = $event.name;
  }

  back() {
    this.router.navigate(['..'], {relativeTo: this.route})
  }
}
