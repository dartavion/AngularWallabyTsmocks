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
var someObject = {
  submit: function (e) {
    console.log('Submit', e);
  }
};

window.addEventListener('message', function(e) {
  if (typeof e.data === 'object') {
    someObject.submit(e);
    console.log('BLAH:::::::::::::::::::');
  }
}, false);

// Test

describe('window.postMessage', function () {

  beforeEach(function(done) {  
    spyOn(someObject, 'submit').and.callFake(function () {
      done();
    });
    window.postMessage({boo: 'test'}, '*');
  });

  it('should submit on a sent message', function () {
    expect(someObject.submit).toHaveBeenCalled();
  });

});