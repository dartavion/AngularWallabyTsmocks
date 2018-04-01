import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';
import { Character } from '../../../../models/star-wars.model';

@Component({
  selector: 'character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  character$: Observable<Character>;

  constructor(private store: Store<fromStore.CharacterState>) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadStarShip())
    this.character$ = this.store.select(fromStore.getSelectedCharacter);
  }

}
