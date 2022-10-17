import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaPoolComponent } from './idea-pool.component';

describe('IdeaPoolComponent', () => {
  let component: IdeaPoolComponent;
  let fixture: ComponentFixture<IdeaPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaPoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
