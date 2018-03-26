import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './containers/characters/characters.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { environment } from '../environments/environment';
import { CharacterService } from './services/character.service';
import { StoreModule } from '@ngrx/store';
import { reducers, effects } from './store';
import { EffectsModule } from '@ngrx/effects';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'star',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: CharactersComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('characters', reducers),
    EffectsModule.forFeature(effects),
    environment.production ?
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100 }) : []
  ],
  declarations: [CharactersComponent],
  exports: [RouterModule],
  providers: [
    CharacterService
  ]
})
export class StarWarsWorldModule { }
