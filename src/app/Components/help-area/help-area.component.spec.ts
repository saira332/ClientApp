import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpAreaComponent } from './help-area.component';

describe('HelpAreaComponent', () => {
  let component: HelpAreaComponent;
  let fixture: ComponentFixture<HelpAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
