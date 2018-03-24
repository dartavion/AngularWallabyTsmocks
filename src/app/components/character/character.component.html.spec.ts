import { CharacterComponent } from './character.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SwapiService } from '../../services/swapi.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';



describe('character html', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [CharacterComponent],
      providers: [SwapiService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('has a bunch of lis', () => {
    component.ngOnInit();
    const lis = el.queryAll(By.css('ul'));
    expect(lis.length).toEqual(1);
  });
});
