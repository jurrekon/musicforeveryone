import { Component } from '@angular/core';

import { Http,Headers } from '@angular/http';
import { AppComponent } from '../app.component';

@Component({
    styleUrls:['login.component.css'],
    templateUrl: 'login.component.html',
    selector: 'login',
    //providers:[SpotifyService]
})

export class LoginComponent{
    user;
    firstname = '';

    constructor(private http: Http){}
    ngOnInit(){}

    public login(username, password){
        this.user = {username:username, password:password};
        console.log(this.user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:4100/login', JSON.stringify(this.user), {headers: headers}).subscribe(data => {
            console.log(data);
            var body = JSON.parse(data['_body']);
            if(body['status'] == 'succes'){
                // set all the variables
            } else {
                // error
            }
        });
    }
}