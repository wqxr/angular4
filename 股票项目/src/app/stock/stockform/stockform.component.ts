import { Component, OnInit } from '@angular/core';
import {Stock, StockService} from "../stock.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-stockform',
  templateUrl: './stockform.component.html',
  styleUrls: ['./stockform.component.css']
})
export class StockformComponent implements OnInit {
  stock:Stock;
  constructor(private routeInfo:ActivatedRoute,private stockService:StockService, private router:Router) {

  }

  ngOnInit() {
    let stockId=this.routeInfo.snapshot.params['id'];
    this.stock=this.stockService.getStock(stockId)
    //this.stock=new Stock(1,"APPLE",1.99,2.5,"这是第一只股票，我叫王清，我在学习angular",["IT","互联网"])
  }
cancel(){
    this.router.navigateByUrl("/stock");
}
save(){
  this.router.navigateByUrl("/stock");

}
}
