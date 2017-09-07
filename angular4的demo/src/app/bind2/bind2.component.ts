import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';

@Component({
  selector: 'app-bind2',
  templateUrl: './bind2.component.html',
  styleUrls: ['./bind2.component.css']
})
export class Bind2Component implements OnInit {
  searchInput:FormControl=new FormControl();
  constructor() {
    this.searchInput.valueChanges.debounceTime(700)
      .subscribe(stockCode=>this.getStockInfo(stockCode));
  }

  ngOnInit() {
  }
// onKey(value:string){
//     console.log(value);
// }
getStockInfo(value:string){
  console.log(value);
}
}
