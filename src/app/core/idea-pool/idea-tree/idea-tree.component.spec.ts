import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaTreeComponent } from './idea-tree.component';

describe('IdeaTreeComponent', () => {
  let component: IdeaTreeComponent;
  let fixture: ComponentFixture<IdeaTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
