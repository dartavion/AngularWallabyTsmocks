import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { SwapiService } from '../services/swapi.service';
import { PhonePipe } from '../pipes/phone.pipe';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        PhonePipe
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: SwapiService, useValue: {
            getCharacters: () => {
              return Observable.of([]);
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
