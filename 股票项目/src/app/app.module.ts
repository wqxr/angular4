import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { StockMangerComponent } from './stock/stock-manger/stock-manger.component';
import { StarsComponent } from './stars/stars.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockformComponent } from './stock/stockform/stockform.component';
import {StockService} from "./stock/stock.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StockFilterPipe } from './stock/stock-filter.pipe';
import {HttpModule} from "@angular/http";


const routeConfig:Routes=[
  {path:"",redirectTo:"/dashboard",pathMatch:'full'},
  {path:"stock",component:StockMangerComponent},
  {path:"stock/:id",component:StockformComponent},
  {path:"dashboard",component:DashboardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    StockMangerComponent,
    StarsComponent,
    DashboardComponent,
    StockformComponent,
    StockFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
