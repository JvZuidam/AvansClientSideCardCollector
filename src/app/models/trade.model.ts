import {userModel} from "./user.model";
import {cardModel} from "./card.model";
import {deckModel} from "./deck.model";

export class tradeModel {
  _id: number = 0;
  userId: string = ''
  trader: userModel;
  traderName: string;
  tradee: userModel;
  tradeeName: string;
  cardToTrade?: cardModel;
  cardTradeName: string;
  cardToReceive?: cardModel;
  cardReceiveName: string
  deckToTrade?: deckModel;
  deckTradeName: string;
  deckToReceive?: deckModel;
  deckReceiveName: string;
  creationDate: Date;


  constructor(id: number, userId: string, trader: userModel, traderName: string, tradee: userModel, tradeeName: string, cardToTrade: cardModel, cardTradeName: string, cardToReceive: cardModel, cardReceiveName: string, deckToTrade: deckModel, deckTradeName: string, deckToReceive: deckModel, deckReceiveName: string) {
    this._id = id;
    this.userId = userId;
    this.trader = trader;
    this.traderName = traderName;
    this.tradee = tradee;
    this.tradeeName = tradeeName;
    this.cardToTrade = cardToTrade;
    this.cardTradeName = cardTradeName;
    this.cardToReceive = cardToReceive;
    this.cardReceiveName = cardReceiveName;
    this.deckToTrade = deckToTrade;
    this.deckTradeName = deckTradeName;
    this.deckToReceive = deckToReceive;
    this.deckReceiveName = deckReceiveName;
    this.creationDate = new Date();
  }
}
