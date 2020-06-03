import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersAreaComponent } from './volunteers-area.component';

describe('VolunteersAreaComponent', () => {
  let component: VolunteersAreaComponent;
  let fixture: ComponentFixture<VolunteersAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteersAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteersAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
