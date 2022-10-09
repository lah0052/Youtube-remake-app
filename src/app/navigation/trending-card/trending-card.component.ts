import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-card',
  templateUrl: './trending-card.component.html',
  styleUrls: ['./trending-card.component.css']
})
export class TrendingCardComponent implements OnInit {
  @Input() thumbnail: string;
  @Input() time: string;
  @Input() title: string;
  @Input() cvd: string;
  @Input() description: string;
  constructor() {
    this.thumbnail = "";
    this.time = ""; 
    this.title = "";
    this.cvd = "";
    this.description = "";
  }
      

  ngOnInit(): void {
  }

}
