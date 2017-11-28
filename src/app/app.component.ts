import { Component } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ChatComponent } from "./chat/chat.component";
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Helios';

  constructor(private http: HttpClient){}

  public login(){
    this.http.get('http://localhost:5000/test').subscribe((res:Response) => {
      console.log(res);
    });
  }

  public chat(){
    this.http.get('http://localhost:5000/chat').subscribe((res:Response) => {
      console.log(res);
    });
  }
}
