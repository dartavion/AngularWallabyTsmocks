import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhoneComponent } from './components/phone/phone.component';
import { PhonePipe } from './pipes/phone.pipe';
import { FeatureToggleGuardGuard } from './guards/feature-toggle-guard.guard';
import { HomeComponent } from './home/home.component';
import { SwapiService } from './services/swapi.service';

const appRoutes: Routes = [
  {
    path: 'phone',
    canActivate: [
      FeatureToggleGuardGuard
    ],
    component: PhoneComponent,
    data: { tink: 'tinker bell'}
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    PhonePipe,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    AppComponent
  ],
  exports: [
  ],
  providers: [
    FeatureToggleGuardGuard,
    SwapiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
