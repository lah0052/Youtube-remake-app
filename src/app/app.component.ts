import { Component } from '@angular/core';
import { mock_video_card } from './navigation/mock_video_card';
import { VideoCardModel } from './navigation/video-card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-app';
  video: VideoCardModel [] = [];

  constructor() {
    for(var video of mock_video_card){
      console.log(video);
      this.video.push(video);
    }
  }
}
