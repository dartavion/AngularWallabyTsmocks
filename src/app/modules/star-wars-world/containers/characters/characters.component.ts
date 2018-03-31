import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromCharacters from '../../store';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../../../models/star-wars.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Observable<Character[]>;
  state = true;
  constructor(private store: Store<fromCharacters.CharacterState>, private charsService: CharacterService) { }

  ngOnInit() {
    this.charsService.getPokiCharacters().subscribe(data => console.log(data));
    this.characters = this.store.select(fromCharacters.getAllCharacters);
    this.store.dispatch(new fromCharacters.LoadCharacters());
    // this.store.subscribe(characters => this.state = characters.characters.characters.loading);
  }

  select(event) {
    console.log(event.currentTarget.textContent);
  }
}
