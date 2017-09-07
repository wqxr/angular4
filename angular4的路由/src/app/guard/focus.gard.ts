
import {CanDeactivate} from "@angular/router";
import {StockComponent} from "../stock/stock.component";

export class focusGuard implements  CanDeactivate<StockComponent>{
  canDeactivate(component: StockComponent) {
    if(component.isFocus()){
      return true;
    }else{
      return window.confirm("不关注就离开吗");
    }

  }

}
