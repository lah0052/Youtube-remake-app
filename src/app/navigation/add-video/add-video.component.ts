import { Component, OnInit } from '@angular/core';
import { VideoCardModel } from '../video-card.model';
import { VideoService } from '../video.service';
import { Router} from '@angular/router';

@Component({
  selector: 'fn-add-product-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  constructor(private ps:VideoService, private router:Router) { }

  ngOnInit(): void {
  }

  addVideo(video:VideoCardModel){
    this.ps.addVideo(video);
    this.router.navigate(['/home']);
  }
}
