import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneComponent } from './phone.component';
import { PhonePipe } from '../../pipes/phone.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('PhoneComponent', () => {
  let component: PhoneComponent;
  let fixture: ComponentFixture<PhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PhoneComponent,
        PhonePipe
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds', () => {
    expect(component.add(2, 2)).toEqual(4);
  });
});
