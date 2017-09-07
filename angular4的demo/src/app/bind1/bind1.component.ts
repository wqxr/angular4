import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind1',
  templateUrl: './bind1.component.html',
  styleUrls: ['./bind1.component.css']
})
export class Bind1Component implements OnInit {
 name:string;
 //name:string="wangqing";
   constructor() {
   setInterval(()=>{
      this.name="TOm"
     },3000)
   }

  ngOnInit() {
   }
  outInput(event){
     this.name=event.target.value;
   }


}
