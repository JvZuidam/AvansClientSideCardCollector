import { Component, OnInit } from '@angular/core';
import {tradeModel} from "../../../models/trade.model";
import {ActivatedRoute} from "@angular/router";
import {TradeService} from "../../../services/trade.service";
import {deckModel} from "../../../models/deck.model";
import {CardService} from "../../../services/card.service";
import {DeckService} from "../../../services/deck.service";
import {cardModel} from "../../../models/card.model";

@Component({
  selector: 'app-trade-detail',
  templateUrl: './trade-detail.component.html',
  styleUrls: ['./trade-detail.component.css']
})
export class TradeDetailComponent implements OnInit {
  tradeId: string | null = null;
  trade: tradeModel | any;

  info : any;

  deckToTrade: deckModel | any
  deckToReceive: deckModel | any;
  cardToTrade: cardModel | any
  cardToReceive: cardModel | any;

  constructor(
    private route: ActivatedRoute,
    private tradeService: TradeService,
    private cardService: CardService,
    private deckService: DeckService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tradeId = params.get('id')
    })
    this.trade = this.tradeService.getTradeById(String(this.tradeId)).subscribe(trade => this.info = trade.results[0])
  }

}
