import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithholdingElectionsComponent } from './withholding-elections.component';

describe('WithholdingElectionsComponent', () => {
  let component: WithholdingElectionsComponent;
  let fixture: ComponentFixture<WithholdingElectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithholdingElectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithholdingElectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
