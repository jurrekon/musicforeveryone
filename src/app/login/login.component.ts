import { Component } from '@angular/core';

import { Http,Headers } from '@angular/http';

@Component({
    styleUrls:['login.component.css'],
    templateUrl: 'login.component.html',
    selector: 'login',
    //providers:[SpotifyService]
})

export class LoginComponent{
    user;

    constructor(private http: Http){}
    ngOnInit(){}

    public login(username, password){
        this.user = {username:username, password:password};
        console.log(this.user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:4100/login', JSON.stringify(this.user), {headers: headers}).subscribe(data => {
            console.log(data);
        });
    }
}