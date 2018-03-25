import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsWorldComponent } from './star-wars-world.component';

describe('StarWarsWorldComponent', () => {
  let component: StarWarsWorldComponent;
  let fixture: ComponentFixture<StarWarsWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarWarsWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarsWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
