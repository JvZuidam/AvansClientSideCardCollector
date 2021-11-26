import {userModel} from "./user.model";
import {cardModel} from "./card.model";
import {deckModel} from "./deck.model";

export class tradeModel {
  id: number = 0;
  userId: string = ''
  trader: userModel;
  tradee: userModel;
  cardToTrade?: cardModel;
  cardToReceive?: cardModel;
  deckToTrade?: deckModel;
  deckToReceive?: deckModel;
  creationDate: Date;


  constructor(id: number, userId: string, trader: userModel, tradee: userModel, cardToTrade: cardModel, cardToReceive: cardModel, deckToTrade: deckModel, deckToReceive: deckModel) {
    this.id = id;
    this.userId = userId;
    this.trader = trader;
    this.tradee = tradee;
    this.cardToTrade = cardToTrade;
    this.cardToReceive = cardToReceive;
    this.deckToTrade = deckToTrade;
    this.deckToReceive = deckToReceive;
    this.creationDate = new Date();
  }
}
