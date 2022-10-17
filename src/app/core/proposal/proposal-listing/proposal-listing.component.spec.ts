import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalListingComponent } from './proposal-listing.component';

describe('ProposalListingComponent', () => {
  let component: ProposalListingComponent;
  let fixture: ComponentFixture<ProposalListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
