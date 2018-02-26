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
import { FakeBackendProvider } from './services/fake-backend.service';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const metaReducers: MetaReducer<any>[] = [];
import { reducers } from './store/reducers';
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
    StoreModule.forRoot({}, { metaReducers }),
    StoreModule.forFeature('starwars', reducers),
    EffectsModule.forRoot([]),
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
    FakeBackendProvider,
    SwapiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
