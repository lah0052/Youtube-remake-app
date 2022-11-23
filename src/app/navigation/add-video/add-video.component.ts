import { Component, OnInit } from '@angular/core';
import { VideoCardModel } from '../video-card.model';
import { VideoService } from '../video.service';

@Component({
  selector: 'fn-add-product-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  constructor(private ps:VideoService) { }

  ngOnInit(): void {
  }

  addVideo(video:VideoCardModel){
    this.ps.addVideo(video);
  }
}
