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
  
}
