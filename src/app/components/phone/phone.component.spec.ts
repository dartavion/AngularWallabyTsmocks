import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PhoneComponent } from './phone.component';
import { PhonePipe } from '../../pipes/phone.pipe';

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
    const el = fixture.debugElement.query(By.css('.phone-input'));
    fixture.detectChanges();
    expect(el.attributes.maxLength).toEqual('13');
    expect(component.add(2, 2)).toEqual(4);
  });
});
