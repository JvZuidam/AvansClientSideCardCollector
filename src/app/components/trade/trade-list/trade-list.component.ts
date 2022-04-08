import { Component, OnInit } from '@angular/core';
import {tradeModel} from "../../../models/trade.model";
import {TradeService} from "../../../services/trade.service";

@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styleUrls: ['./trade-list.component.css']
})
export class TradeListComponent implements OnInit {
  trades: tradeModel[] = [];

  constructor(
    private tradeService: TradeService
  ) { }

  ngOnInit(): void {
    this.tradeService.getTrades().subscribe(trade => {
      for (let i = 0; i < trade.results.length; i++) {
        this.trades.push(trade.results[i])
      }
    })
  }

  deleteRow(id: number) {
    if (confirm("Are you sure to delete this trade?")) {
      this.tradeService.deleteTrade(String(id)).subscribe( trade =>{})
      for(let i = 0; i < this.trades.length; ++i){
        if (this.trades[i]._id === id) {
          this.trades.splice(i,1);
        }
      }
    }
  }

}
