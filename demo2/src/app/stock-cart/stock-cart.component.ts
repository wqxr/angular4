import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-stock-cart',
  templateUrl: './stock-cart.component.html',
  styleUrls: ['./stock-cart.component.css']
})
export class StockCartComponent implements OnInit {
  @Input()
  private stockInfo:StockInfo;
  constructor() { }

  ngOnInit() {
  }

}
