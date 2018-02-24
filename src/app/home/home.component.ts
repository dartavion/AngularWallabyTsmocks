import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/home', { outlets: { characters: 'characters' } }], { skipLocationChange: true });
    // this.router.navigate(['/home', { outlets: { characterDetails: ['character-details', 'r2'] } }], { skipLocationChange: true });
    // (characterDetails:character-details/r2//characters:characters)
  }
}
