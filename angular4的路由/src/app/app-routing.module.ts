import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {StockComponent} from "./stock/stock.component";
import {Code404Component} from "./code404/code404.component";
import {BuylistComponent} from "./buylist/buylist.component";
import {SellerlistComponent} from "./sellerlist/sellerlist.component";
import {ConsultComponent} from "./consult/consult.component";
import {PermissionGuard} from "./guard/permissionguard";
import {focusGuard} from "./guard/focus.gard";
import {Stockresove} from "./stockresove/stockresove";


const routes: Routes = [

  { path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"consult",component:ConsultComponent,outlet:"aux"},
  {path:"stock/:id",component:StockComponent,data:[{isPro:true}],children:[
  {path:"",component:BuylistComponent},
  {path:"seller/:id",component:SellerlistComponent}],resolve:{stock:Stockresove}},
  {path:"**",component:Code404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
