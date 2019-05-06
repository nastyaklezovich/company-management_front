import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRecommendationComponent } from './show-recommendation.component';

describe('ShowRecommendationComponent', () => {
  let component: ShowRecommendationComponent;
  let fixture: ComponentFixture<ShowRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
