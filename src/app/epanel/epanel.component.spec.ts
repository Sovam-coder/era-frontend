import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpanelComponent } from './epanel.component';

describe('EpanelComponent', () => {
  let component: EpanelComponent;
  let fixture: ComponentFixture<EpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
