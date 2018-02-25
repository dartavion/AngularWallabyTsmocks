import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  private nextUrl;
  private previousUrl;
  private characters;

  constructor(private swapi: SwapiService, private router: Router) { }

  ngOnInit() {
    this.getCharacters();
  }
  goTo(character: string) {
    this.router.navigate(['/home', { outlets: { characterDetails: ['character-details', character] } }], { skipLocationChange: true });
  }
  next() {
    this.getCharacters(this.nextUrl);
  }

  previous() {
    this.getCharacters(this.previousUrl);
  }

  private getCharacters(url?: string) {
    this.swapi.getCharacters(url)
      .subscribe((data) => {
        this.nextUrl = data.next;
        this.previousUrl = data.previous;
        this.characters = data.results;
        this.router.navigate(['/home', { outlets: { characterDetails: ['character-details', 'Luke'] } }], { skipLocationChange: true });
    });
  }

}
