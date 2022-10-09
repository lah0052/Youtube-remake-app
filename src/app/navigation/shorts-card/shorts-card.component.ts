import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shorts-card',
  templateUrl: './shorts-card.component.html',
  styleUrls: ['./shorts-card.component.css']
})
export class ShortsCardComponent implements OnInit {
  @Input() thumbnail: string;
  @Input() logo: string;
  @Input() title: string;
  @Input() channel: string;
  @Input() vd: string;
  constructor() {
    this.thumbnail = "";
    this.logo = ""; 
    this.title = "";
    this.channel = "";
    this.vd = "";
  }
  ngOnInit(): void {
  }

}
