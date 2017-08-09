import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TcModule } from 'threatconnect-ng/main';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TcModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
