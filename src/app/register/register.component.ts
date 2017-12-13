import { Component } from '@angular/core';

import { Register } from './register.model';
import { Http,Headers } from '@angular/http';

@Component({
    styleUrls:['register.component.css'],
    templateUrl: 'register.component.html',
    selector: 'register',
    //providers:[SpotifyService]
})

export class RegisterComponent{
    user = new Register('', '', '', '');

    constructor(private http: Http){}
    ngOnInit(){}

    public createUser(firstname, lastname, username,password){
        this.user = new Register(firstname, lastname, username, password);
        console.log(this.user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:4100/register', JSON.stringify(this.user), {headers: headers}).subscribe(data => {
            console.log(data);
        });
    }
}