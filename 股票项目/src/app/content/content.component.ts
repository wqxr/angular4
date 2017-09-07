import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pageTitle="";
  pageTitleSecs="";
  constructor(public router:Router){
    router.events.filter(event=> event instanceof NavigationEnd).subscribe((event:NavigationEnd)=>{
      if(event.url=='/dashboard'){
        this.pageTitle="这里是首页";
        this.pageTitleSecs="";
      }else if(event.url.startsWith('/stock')){
        this.pageTitle="这里是股票信息管理";
        this.pageTitleSecs="进行股票的增删改查";
      }
    })
  }



  ngOnInit() {
  }

}
