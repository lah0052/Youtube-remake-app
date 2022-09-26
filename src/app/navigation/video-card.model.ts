export class VideoCardModel{
    img: string;
    time: string;
    video_title: string;
    channel_name: string;
    views_date: string;

    constructor(img: string,time: string,video_title: string,channel_name: string,views_date: string){
        this.img = img;
        this.time = time;
        this.video_title = video_title;
        this.channel_name = channel_name;
        this.views_date = views_date;

    }
}