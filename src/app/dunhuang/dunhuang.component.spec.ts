import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DunhuangComponent } from './dunhuang.component';

describe('DunhuangComponent', () => {
  let component: DunhuangComponent;
  let fixture: ComponentFixture<DunhuangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DunhuangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DunhuangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
