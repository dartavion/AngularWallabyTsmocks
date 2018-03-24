import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character;

  constructor(private route: ActivatedRoute, private swapi: SwapiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.getCharacterByName(undefined, params['character-name']));
  }

  private getCharacterByName(url?: string, name?: string) {
    this.swapi.getCharacterByName(url, name)
      .subscribe((data) => {
        console.log('Data::::', data);
        this.character = data.results[0];
    });
  }

}
