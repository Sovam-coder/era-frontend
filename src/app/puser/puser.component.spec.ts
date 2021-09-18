import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuserComponent } from './puser.component';

describe('PuserComponent', () => {
  let component: PuserComponent;
  let fixture: ComponentFixture<PuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
