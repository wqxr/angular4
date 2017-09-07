import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bide',
  templateUrl: './bide.component.html',
  styleUrls: ['./bide.component.css']
})
export class BideComponent implements OnInit {
  birthday:Date=new Date();
  pi:number=3.1415926;
  size:number=7

  constructor() { }

  ngOnInit() {
  }

}
