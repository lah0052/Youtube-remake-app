import { Component, OnInit } from '@angular/core';
import { VideoCardModel } from 'src/app/navigation/video-card.model';
import { VideoService } from 'src/app/navigation/video.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {

  videos: VideoCardModel [] = [];

  constructor(private videoService:VideoService) {
    
  }

  ngOnInit(): void {
    this.videoService.getVideos().subscribe((data: VideoCardModel []) => {
      console.log("Fetching Videos");
      for (var video of data){
        console.log(video);
        this.videos.push(video);
      }  
    });    
  }
}
