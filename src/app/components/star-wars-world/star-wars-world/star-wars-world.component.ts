import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-star-wars-world',
  templateUrl: './star-wars-world.component.html',
  styleUrls: ['./star-wars-world.component.css']
})
export class StarWarsWorldComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['home', { outlets: { starWarsWorld: 'star-wars' } }], { skipLocationChange: true });
  }

}
