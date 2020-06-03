import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAreaComponent } from './side-area.component';

describe('SideAreaComponent', () => {
  let component: SideAreaComponent;
  let fixture: ComponentFixture<SideAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
