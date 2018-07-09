import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  item: any = {value: '0000000000'};
  constructor() { }

  ngOnInit() {
    this.add(2, 9);
  }

  add(a, b) {
    return a + b;
  }

}
