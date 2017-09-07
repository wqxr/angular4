import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() {

    Observable.from([1,2,3,4])
      .filter((e)=>e%2==0).map((e)=>e*e).subscribe(
      e=>console.log(e),
      err=>console.error(err),
      ()=>console.log("结束了")
    )
  }

  ngOnInit() {
  }

}
