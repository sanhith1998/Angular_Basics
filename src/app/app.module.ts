import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { successComponent } from './success/success.component';

import { warningComponent } from './warning/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    warningComponent,
    successComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
