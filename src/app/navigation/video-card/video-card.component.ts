import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {

  @Input() img: string;
  @Input() time: string;
  @Input() video_title: string;
  @Input() channel_name: string;
  @Input() views_date: string;


  constructor() { 
    this.img = "";
    this.time = "";
    this.video_title = "No title";
    this.channel_name = "No Channel Name";
    this.views_date = "No Date";
  }

  ngOnInit(): void {
  }

}
