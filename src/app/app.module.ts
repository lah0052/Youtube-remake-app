import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './navigation/top-nav-bar/top-nav-bar.component';
import { SecondNavBarComponent } from './navigation/second-nav-bar/second-nav-bar.component';
import { SideNavBarComponent } from './navigation/side-nav-bar/side-nav-bar.component';
import { VideoCardComponent } from './navigation/video-card/video-card.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondNavBarComponent,
    SideNavBarComponent,
    VideoCardComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
