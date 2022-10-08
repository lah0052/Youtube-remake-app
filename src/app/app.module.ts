import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './navigation/top-nav-bar/top-nav-bar.component';
import { SecondNavBarComponent } from './navigation/second-nav-bar/second-nav-bar.component';
import { SideNavBarComponent } from './navigation/side-nav-bar/side-nav-bar.component';
import { VideoCardComponent } from './navigation/video-card/video-card.component';
import { HomeLayoutComponent } from './routingPages/home-layout/home-layout.component';
import { ExplorePageComponent } from './routingPages/explore-page/explore-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ShortsLayoutComponent } from './routingPages/shorts-layout/shorts-layout.component';
import { SubscriptionsLayoutComponent } from './routingPages/subscriptions-layout/subscriptions-layout.component';
import { SigninLayoutComponent } from './routingPages/signin-layout/signin-layout.component';
import { MusicComponent } from './routingPages/music/music.component';
import { CategoryCardComponent } from './navigation/category-card/category-card.component';
import { TrendingCardComponent } from './navigation/trending-card/trending-card.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondNavBarComponent,
    SideNavBarComponent,
    VideoCardComponent,
    HomeLayoutComponent,
    ExplorePageComponent,
    ShortsLayoutComponent,
    SubscriptionsLayoutComponent,
    SigninLayoutComponent,
    MusicComponent,
    CategoryCardComponent,
    TrendingCardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
