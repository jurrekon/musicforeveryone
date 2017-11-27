import { Component } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {ChatComponent} from "./chat/chat.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Helios';

  constructor(private http: HttpClient){}

  public login(){
    this.http.get('http://localhost:8888/test').subscribe((res:Response) => {
      console.log(res);
    });
  }

  public chat(){
    this.http.get('http://localhost:8888/chat').subscribe((res:Response) => {
      console.log(res);
    });
  }
}
