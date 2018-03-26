import { Observable } from 'rxjs/Observable';
import { Character } from '../../app/models/star-wars.model';

export abstract class Characters {
  baseUrl = 'https://swapi.co/api';

  abstract getCharacters(): Observable<Character[]>;
}
