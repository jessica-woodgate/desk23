import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobeComponentComponent } from './globe-component.component';

describe('GlobeComponentComponent', () => {
  let component: GlobeComponentComponent;
  let fixture: ComponentFixture<GlobeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
