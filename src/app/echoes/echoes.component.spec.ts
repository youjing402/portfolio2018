import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchoesComponent } from './echoes.component';

describe('EchoesComponent', () => {
  let component: EchoesComponent;
  let fixture: ComponentFixture<EchoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
