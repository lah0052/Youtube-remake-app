import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from './user-info.model';

@Injectable()
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  myInfo: UserInfo | undefined;

  constructor(private http: HttpClient) {

   }

  getUserInfo() {
    return this.http.get<UserInfo>('https://app-3a7ef-default-rtdb.firebaseio.com/my-info.json')
  }
  showUserInfo(){
    this.getUserInfo().subscribe( data =>{
      console.log(data);
      this.myInfo = data;
    })
  }
  ngOnInit(): void {
    console.log("Sending a get request to the server");
    this.getUserInfo();
    console.log("regestiring showUserInfo as subscriber");
    this.showUserInfo();
  }

}
