import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServceAreaComponent } from './servce-area.component';

describe('ServceAreaComponent', () => {
  let component: ServceAreaComponent;
  let fixture: ComponentFixture<ServceAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServceAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
