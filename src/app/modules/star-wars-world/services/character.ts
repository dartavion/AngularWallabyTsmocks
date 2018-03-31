import { Observable } from 'rxjs/Observable';
import { Character } from '../../../models/star-wars.model';

export abstract class Characters {
  baseUrl = 'https://swapi.co/api';
  pokiUrl = 'https://pokeapi.co/api/v2';

  abstract getCharacters(): Observable<Character[]>;
}
