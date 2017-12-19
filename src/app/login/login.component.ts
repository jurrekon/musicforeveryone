import { Component } from '@angular/core';

import { Http,Headers } from '@angular/http';
import { AppComponent } from '../app.component';
import { appService } from '../app.service';

@Component({
    styleUrls:['login.component.css'],
    templateUrl: 'login.component.html',
    selector: 'login',
    providers:[appService]
})

export class LoginComponent{
    user;

    constructor(private http: Http,
                private appService: appService){}
    ngOnInit(){}

    public login(username, password){
        this.user = {username:username, password:password};
        console.log(this.user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:4100/login', JSON.stringify(this.user), {headers: headers}).subscribe(data => {
            console.log(data);
            var body = JSON.parse(data['_body']);
            if(body['status'] == 'succes'){
                this.appService.setName(username);
                console.log(this.appService.name);
            } else {
                // error
            }
        });
    }
}