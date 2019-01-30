import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondListingComponent } from './second-listing.component';

describe('SecondListingComponent', () => {
  let component: SecondListingComponent;
  let fixture: ComponentFixture<SecondListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
