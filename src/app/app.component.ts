import { Component, OnInit } from '@angular/core';
import { SwapiService } from './services/swapi.service';
import { FeatureService } from './services/feature.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private featureService: FeatureService, private swapi: SwapiService) {}

  ngOnInit() {
    this.featureService
      .getToggle()
      .subscribe(this.hasFeature);
  }

  hasFeature = (data) => {
    if (data[0]) {
      return this.swapi.hasToggle = true;
    }
    this.swapi.hasToggle = false;
  }

  setStorage() {
    this.featureService.setToggle();
  }

  getStorage() {
    this.featureService.getToggle();
  }

  removeStorage() {
    this.featureService.deleteToggle();
  }
}
