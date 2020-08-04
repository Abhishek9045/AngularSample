import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingNestedComponent } from './rating-nested.component';

describe('RatingNestedComponent', () => {
  let component: RatingNestedComponent;
  let fixture: ComponentFixture<RatingNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
