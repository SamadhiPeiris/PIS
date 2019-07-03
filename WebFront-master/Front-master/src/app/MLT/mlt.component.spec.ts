import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MltComponent } from './mlt.component';

describe('MltComponent', () => {
  let component: MltComponent;
  let fixture: ComponentFixture<MltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
