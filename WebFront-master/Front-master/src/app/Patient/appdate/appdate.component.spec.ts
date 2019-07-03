import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppdateComponent } from './appdate.component';

describe('AppdateComponent', () => {
  let component: AppdateComponent;
  let fixture: ComponentFixture<AppdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
