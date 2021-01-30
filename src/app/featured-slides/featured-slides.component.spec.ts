import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedSlidesComponent } from './featured-slides.component';

describe('FeaturedSlidesComponent', () => {
  let component: FeaturedSlidesComponent;
  let fixture: ComponentFixture<FeaturedSlidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedSlidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
