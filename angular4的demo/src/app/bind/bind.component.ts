import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  imgUrl:string="http://placehold.it/400*200";
  size:number=2;
  divClass:string;
  isBig:boolean=false;
  cssClass:any={
    a:false,
    b:false,
    c:false
  };
  divstyle:any={
    color:'red',
    background:'green'
  }
  isDev:boolean=true;

  constructor() {
    setTimeout(()=>{
      this.divClass="a b c";
      this.isBig=true;
      this.cssClass={
        a:true,
        b:true,
        c:true
      }
      this.divstyle={
        color:'pink',
        background:"red",
      }
      this.isDev=false;

    },600)
  }

  ngOnInit() {
  }
  doOnClick(event:any){
    console.log(event);
  }
  doOnInput(event:any){
    console.log(event.target.value);
    console.log(event.target.getAttribute("value"));
}

}
