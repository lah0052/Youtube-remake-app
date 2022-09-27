import { Component } from '@angular/core';
import {  mock_video_list } from './navigation/mock_video_list';
import { VideoCardModel } from './navigation/video-card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-app';
  videos: VideoCardModel [] = [];

  constructor() {
    for(var video of mock_video_list){
      console.log(video);
      this.videos.push(video);
    }
  }
}
