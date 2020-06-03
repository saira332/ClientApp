import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CausesAreaComponent } from './causes-area.component';

describe('CausesAreaComponent', () => {
  let component: CausesAreaComponent;
  let fixture: ComponentFixture<CausesAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CausesAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CausesAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
