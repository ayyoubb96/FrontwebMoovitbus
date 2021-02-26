import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBusPleinComponent } from './liste-bus-plein.component';

describe('ListeBusPleinComponent', () => {
  let component: ListeBusPleinComponent;
  let fixture: ComponentFixture<ListeBusPleinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBusPleinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBusPleinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
