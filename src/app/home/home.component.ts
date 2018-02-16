import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private swapi: SwapiService) { }

  ngOnInit() {
    this.swapi.getCharacters()
      .subscribe((data) => {
        console.log('Data::::', data);
      });
  }

}
