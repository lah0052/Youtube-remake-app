import { Component, OnInit } from '@angular/core';
import { mock_video_list } from 'src/app/navigation/mock_video_list';
import { VideoCardModel } from 'src/app/navigation/video-card.model';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {

  videos: VideoCardModel [] = [];

  constructor() {
    for(var video of mock_video_list){
      console.log(video);
      this.videos.push(video);
    }
  }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
