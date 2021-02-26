import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalerUrgenceComponent } from './signaler-urgence.component';

describe('SignalerUrgenceComponent', () => {
  let component: SignalerUrgenceComponent;
  let fixture: ComponentFixture<SignalerUrgenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalerUrgenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalerUrgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
