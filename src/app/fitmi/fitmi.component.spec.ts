import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitmiComponent } from './fitmi.component';

describe('FitmiComponent', () => {
  let component: FitmiComponent;
  let fixture: ComponentFixture<FitmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
