import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOffreComponent } from './display-offre.component';

describe('DisplayOffreComponent', () => {
  let component: DisplayOffreComponent;
  let fixture: ComponentFixture<DisplayOffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
