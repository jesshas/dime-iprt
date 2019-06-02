import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecemberElectionsComponent } from './december-elections.component';

describe('DecemberElectionsComponent', () => {
  let component: DecemberElectionsComponent;
  let fixture: ComponentFixture<DecemberElectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecemberElectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecemberElectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
