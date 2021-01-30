import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedStoriesComponent } from './featured-stories.component';

describe('FeaturedStoriesComponent', () => {
  let component: FeaturedStoriesComponent;
  let fixture: ComponentFixture<FeaturedStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
