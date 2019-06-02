import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolloverElectionsComponent } from './rollover-elections.component';

describe('RolloverElectionsComponent', () => {
  let component: RolloverElectionsComponent;
  let fixture: ComponentFixture<RolloverElectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolloverElectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolloverElectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
