import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PhoneComponent } from './components/phone/phone.component';
import { PhonePipe } from './pipes/phone.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
