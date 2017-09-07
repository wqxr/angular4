import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Stock} from "../stock/stock.component";
import {Inject, Injectable} from "@angular/core";
@Injectable()
export class Stockresove implements Resolve<Stock>{
  constructor(private router:Router){

}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Stock> | Promise<Stock> | Stock {
    let id=route.params["id"];
    if(id==1){
      return new Stock(1,"ibm");
    }else{
       this.router.navigate(['/home']);
       return undefined;
    }
  }

}
