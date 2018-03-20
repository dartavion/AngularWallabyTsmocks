import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/of';

import { CharacterComponent } from './character.component';
import { SwapiService } from '../../services/swapi.service';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;
  let mockSwapi = {
    getCharacters: () => {
      return Observable.of(
        {
          next: 'next',
          previous: 'previous',
          results: [{firstName: 'meh'}, {firstName: 'muh'}]
        }
      );
  }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        CharacterComponent
      ],
      providers: [
        {provide: SwapiService, useValue: mockSwapi}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockSwapi = TestBed.get(SwapiService);
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has Behavior Subject with initial value', () => {
    component.savedSubject.subscribe(subject => {
      expect(subject).toEqual('test');
    });
  });

  it('calls behavior subject next', () => {
    component.getSubject();
    fixture.detectChanges();
    component.savedSubject.subscribe(subject => {
      expect(subject).toEqual('first');
    });
  });

  it('gets characters', () => {
    spyOn(mockSwapi, 'getCharacters').and.callThrough();

    component.ngOnInit();
    expect(component['nextUrl']).toBe('next');
    expect(component['previousUrl']).toBe('previous');
    expect(component['characters']).toEqual([{firstName: 'meh'}, {firstName: 'muh'}]);
  });
});
