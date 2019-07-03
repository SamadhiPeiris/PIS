import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SDoctorComponent } from './sdoctor.component';

describe('SDoctorComponent', () => {
  let component: SDoctorComponent;
  let fixture: ComponentFixture<SDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
