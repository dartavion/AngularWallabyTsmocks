import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { SwapiService } from './services/swapi.service';
import { FeatureService } from './services/feature.service';
import 'rxjs/add/operator/pairwise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    private router: Router,
    private featureService: FeatureService, 
    private swapi: SwapiService) {}

  ngOnInit() {
    this.checkFeature();
    this.router
      .events
      .pairwise()
      .subscribe((event) => {
        this.checkFeature();
    });
  }

  checkFeature() {
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
