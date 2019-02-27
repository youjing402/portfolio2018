import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocoComponent } from './poco.component';

describe('PocoComponent', () => {
  let component: PocoComponent;
  let fixture: ComponentFixture<PocoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
