import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { FeaturedStoriesComponent } from './featured-stories/featured-stories.component';
import { DownloadSectionComponent } from './download-section/download-section.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { InspirationsComponent } from './inspirations/inspirations.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturedSlidesComponent } from './featured-slides/featured-slides.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CardsComponent,
    FeaturedStoriesComponent,
    DownloadSectionComponent,
    NewsletterComponent,
    InspirationsComponent,
    LearnMoreComponent,
    FooterComponent,
    FeaturedSlidesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMasonryModule,
    BrowserAnimationsModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
