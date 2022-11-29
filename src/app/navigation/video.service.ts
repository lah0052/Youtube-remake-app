import { HttpClient } from "@angular/common/http";
import {VideoCardModel} from "./video-card.model";
import {Injectable} from "@angular/core";
import {AngularFireDatabase} from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)
export class VideoService{
    private baseUrl: string = "https://app-3a7ef-default-rtdb.firebaseio.com/"
    private videosEndPoint: string = "video-card.json";

    constructor(private db:AngularFireDatabase){

    }

    getVideos(){
        return this.db.list<VideoCardModel >("video-card").valueChanges();
    }
    getVideo(index: number){
        return this.db.list<VideoCardModel >(this.baseUrl + this.videosEndPoint + 'video-card' + '/' + index + '.json');
    }

    addVideo(video: VideoCardModel){
        this.db.list<VideoCardModel>("video-card").push(video);
    }
}

