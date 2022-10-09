import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {

@Input() cover_art: string;
@Input() title: string;
@Input() artist_album: string;
  constructor() {
    this.cover_art = "";
    this.title = "";
    this.artist_album = "";
   }

  ngOnInit(): void {
  }

}
