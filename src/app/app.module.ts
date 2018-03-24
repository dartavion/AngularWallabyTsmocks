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
import { CharacterComponent } from './components/character/character.component';
import { PlanetComponent } from './components/planet/planet.component';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';
import { FourOfourComponent } from './components/four-ofour/four-ofour.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

const appRoutes: Routes = [
  // { path: '**', redirectTo: '/404' },
  // { path: '404', component: FourOfourComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
 },
  {
    path: 'phone',
    component: PhoneComponent,
    data: { tink: 'tinker bell' }
  },
  {
    path: 'coming-soon',
    component: CommingSoonComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [
      FeatureToggleGuardGuard
    ],
    children: [
      {
        path: 'characters',
        component: CharacterComponent,
        outlet: 'characters'
      },
      {
        path: 'character-details/:character-name',
        component: CharacterDetailComponent,
        outlet: 'characterDetails'
      },
      {
        path: 'planet',
        component: PlanetComponent,
        outlet: 'planets'
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    PhonePipe,
    HomeComponent,
    CharacterComponent,
    PlanetComponent,
    CommingSoonComponent,
    FourOfourComponent,
    CharacterDetailComponent
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
