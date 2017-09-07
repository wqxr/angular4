import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { Bind1Component } from './bind1/bind1.component';
import { DemoComponent } from './demo/demo.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { Bind2Component } from './bind2/bind2.component';
import { BideComponent } from './bide/bide.component';
import { MultiplePipe } from './pipe/multiple.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    Bind1Component,
    DemoComponent,
    Bind2Component,
    BideComponent,
    MultiplePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
