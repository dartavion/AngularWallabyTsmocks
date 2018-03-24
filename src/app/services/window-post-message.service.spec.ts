import { TestBed, inject, async } from '@angular/core/testing';

import { WindowPostMessageService } from './window-post-message.service';

describe('WindowPostMessageService', () => {
  let service: WindowPostMessageService;

  const windowMessage = window.addEventListener('message', function(event) {
    if (typeof event.data === 'object') {
      service.postMessage(event);
      expect(event.data).toEqual({boo: 'test'});
    }
  }, false);

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [WindowPostMessageService]
    });
    service = bed.get(WindowPostMessageService);
  });

  afterEach(() => {
    // expect(windowMessage).toBeDefined();
    // windowMessage = undefined;
  });

  beforeEach(async(() => {
    spyOn(service, 'postMessage').and.callThrough();
    window.postMessage({boo: 'test'}, '*');
  }));

  describe('window.postMessage', function () {
    it('should submit on a sent message', function () {
      expect(service.postMessage).toHaveBeenCalled();
    });
  });
});
