import {Component, Input, OnInit, Output} from '@angular/core';
import EventEmitter = NodeJS.EventEmitter;

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css']
})
export class StockSearchComponent implements OnInit {
  @Input()//说明keyword是输入属性
  private keyWord:string;
  private price:number;
  @Output
  searchResult:EventEmitter<StockInfo>=new EventEmitter();
  addCard:EventEmitter<StockInfo>=new EventEmitter();
  constructor(){}
  buyStock(){
    this.addCard.emit(new StockInfo(this.keyWord,this.price));
  }

  ngOnInit() {
    setInterval(()=>{
      let stockInfo:StockInfo=new StockInfo(this.keyWord,100*Math.random());
      this.price=stockInfo.price;
      this.searchResult.emit(stockInfo);
      this.keyWord="xxx";
    },3000)
  }

}
export class StockInfo{
  constructor(
    public  name:string;
    public price:number
  )
}
