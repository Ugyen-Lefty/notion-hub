import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentModalComponent } from './appoinment-modal.component';

describe('AppoinmentModalComponent', () => {
  let component: AppoinmentModalComponent;
  let fixture: ComponentFixture<AppoinmentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoinmentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
