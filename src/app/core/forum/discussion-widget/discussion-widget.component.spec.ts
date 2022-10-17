import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionWidgetComponent } from './discussion-widget.component';

describe('DiscussionWidgetComponent', () => {
  let component: DiscussionWidgetComponent;
  let fixture: ComponentFixture<DiscussionWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
