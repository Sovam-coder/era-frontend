import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnewuserComponent } from './cnewuser.component';

describe('CnewuserComponent', () => {
  let component: CnewuserComponent;
  let fixture: ComponentFixture<CnewuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnewuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CnewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
