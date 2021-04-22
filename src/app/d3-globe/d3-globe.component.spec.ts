import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3GlobeComponent } from './d3-globe.component';

describe('D3GlobeComponent', () => {
  let component: D3GlobeComponent;
  let fixture: ComponentFixture<D3GlobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D3GlobeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D3GlobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
