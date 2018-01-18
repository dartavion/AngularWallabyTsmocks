import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PhoneComponent } from './components/phone/phone.component';
import { PhonePipe } from './pipes/phone.pipe';


const appRoutes: Routes = [
  { path: 'phone', component: PhoneComponent, data: { tink: 'tinker bell'} },
];

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    PhonePipe
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AppComponent
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
