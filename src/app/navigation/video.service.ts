import { HttpClient } from "@angular/common/http";
import {VideoCardModel} from "./video-card.model";
import {Injectable} from "@angular/core";

@Injectable(
    {providedIn: 'root'}
)
export class VideoService{
    private baseUrl: string = "https://app-3a7ef-default-rtdb.firebaseio.com/"
    private videosEndPoint: string = "video-card.json";

    constructor(private http:HttpClient){

    }

    getVideos(){
        return this.http.get<VideoCardModel []>(this.baseUrl + this.videosEndPoint);
    }
    getVideo(index: number){
        return this.http.get<VideoCardModel []>(this.baseUrl + this.videosEndPoint + 'video-card' + '/' + index + '.json');
    }
}

