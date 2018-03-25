import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './containers/characters/characters.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'star',
    pathMatch: 'full'
  },
  {
    path: 'star',
    component: CharactersComponent,
    outlet: 'starWarsWorld'
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [CharactersComponent],
  exports: [CharactersComponent]
})
export class StarWarsWorldModule { }
