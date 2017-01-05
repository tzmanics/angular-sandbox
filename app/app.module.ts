import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { ToshiDetailComponent } from './toshi-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ToshiDetailComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
