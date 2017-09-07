import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Code404Component } from './code404/code404.component';
import { BuylistComponent } from './buylist/buylist.component';
import { SellerlistComponent } from './sellerlist/sellerlist.component';
import { ConsultComponent } from './consult/consult.component';
import {PermissionGuard} from "./guard/permissionguard";
import {focusGuard} from "./guard/focus.gard";
import {Stockresove} from "./stockresove/stockresove";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockComponent,
    Code404Component,
    BuylistComponent,
    SellerlistComponent,
    ConsultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PermissionGuard,focusGuard,Stockresove],
  bootstrap: [AppComponent]
})
export class AppModule { }
