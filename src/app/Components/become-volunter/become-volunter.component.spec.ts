import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeVolunterComponent } from './become-volunter.component';

describe('BecomeVolunterComponent', () => {
  let component: BecomeVolunterComponent;
  let fixture: ComponentFixture<BecomeVolunterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeVolunterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeVolunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
