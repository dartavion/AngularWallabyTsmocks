import { Injectable } from '@angular/core';

@Injectable()
export class WindowPostMessageService {

  constructor() { }

  postMessage(event) {
    console.log(event.data);
  }
}
