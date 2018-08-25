import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularBlockUiDynamicModule } from 'angular-block-ui-dynamic';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularBlockUiDynamicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
