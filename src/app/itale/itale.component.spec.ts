import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItaleComponent } from './itale.component';

describe('ItaleComponent', () => {
  let component: ItaleComponent;
  let fixture: ComponentFixture<ItaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
