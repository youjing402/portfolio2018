import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JbComponent } from './jb.component';

describe('JbComponent', () => {
  let component: JbComponent;
  let fixture: ComponentFixture<JbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
