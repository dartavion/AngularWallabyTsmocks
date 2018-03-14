import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComponent } from './character.component';
import { SwapiService } from '../../services/swapi.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import 'rxjs/add/operator/take';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ CharacterComponent ],
      providers: [
        SwapiService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('uses Behavior Subject', () => {
    component.ngOnInit();
    fixture.detectChanges();
    component.savedSubject.take(1).subscribe(subject => expect(subject).toEqual('monkey'));
    component.getSubject();
    fixture.detectChanges();
    component.savedSubject.subscribe(subject => expect(subject).toEqual('tinkery'));
  });
});
