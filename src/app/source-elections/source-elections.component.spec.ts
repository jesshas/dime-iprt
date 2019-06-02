import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceElectionsComponent } from './source-elections.component';

describe('SourceElectionsComponent', () => {
  let component: SourceElectionsComponent;
  let fixture: ComponentFixture<SourceElectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceElectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceElectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
