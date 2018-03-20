import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  private nextUrl;
  private previousUrl;
  private characters;
  private behaviorSubject: BehaviorSubject<string> = new BehaviorSubject(null);

  public savedSubject = this.behaviorSubject.asObservable();
  public subject = '';

  constructor(public swapi: SwapiService, private router: Router) {}

  ngOnInit() {
    this.getCharacters();
    this.behaviorSubject.next('test');
  }
  goTo(character: string) {
    // ['/home', { outlets: { characterDetails: ['character-details', 'r2'] } }], { skipLocationChange: true })
    this.router.navigate(['/home', { outlets: { characterDetails: ['character-details', character] } }], { skipLocationChange: true });
  }
  next() {
    this.getCharacters(this.nextUrl);
  }

  getSubject() {
    this.behaviorSubject.next('first');
  }

  previous() {
    this.getCharacters(this.previousUrl);
  }

  private getCharacters(url?: string) {
    return this.swapi.getCharacters(url)
      .subscribe((data) => {
        this.nextUrl = data.next;
        this.previousUrl = data.previous;
        this.characters = data.results;
        this.router.navigate(['/home', { outlets: { characterDetails: ['character-details', 'r2'] } }], { skipLocationChange: true });
    });
  }
}
