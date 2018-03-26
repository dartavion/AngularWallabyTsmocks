import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromCharacters from '../../store';
import { Character } from '../../../app/models/star-wars.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Observable<Character[]>;

  constructor(private store: Store<fromCharacters.CharacterState>) { }

  ngOnInit() {
    this.characters = this.store.select(fromCharacters.getAllCharacters);
    this.store.dispatch(new fromCharacters.LoadCharacters());
  }
}
