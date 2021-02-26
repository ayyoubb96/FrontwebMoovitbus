import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapUrgenceComponent } from './map-urgence.component';

describe('MapUrgenceComponent', () => {
  let component: MapUrgenceComponent;
  let fixture: ComponentFixture<MapUrgenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapUrgenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapUrgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
