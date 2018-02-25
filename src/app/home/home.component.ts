import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private nextUrl;
  private previousUrl;
  private characters;

  constructor(private swapi: SwapiService) { }

  ngOnInit() {
    this.getCharacters();
  }

  next() {
    this.getCharacters(this.nextUrl);
  }

  previous() {
    this.getCharacters(this.previousUrl);
  }

  private getCharacters(url?: string) {
    console.log('CALLED::::::::::::::::::::::::::::');
    this.swapi.getCharacters(url)
      .subscribe((data) => {
        console.log('Data::::', data);
        this.nextUrl = data.next;
        this.previousUrl = data.previous;
        this.characters = data.results;
    });
  }
}
