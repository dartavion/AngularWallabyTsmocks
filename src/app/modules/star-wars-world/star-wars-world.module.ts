import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers, effects } from './store';

import { CharactersComponent } from './containers/characters/characters.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { CharacterService } from './services/character.service';
import { environment } from '../../../environments/environment';
import { CharacterDetailsComponent } from '../../components/character-details/character-details.component';

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
  declarations: [CharactersComponent, CharacterDetailsComponent],
  exports: [RouterModule],
  providers: [
    CharacterService
  ]
})
export class StarWarsWorldModule { }
