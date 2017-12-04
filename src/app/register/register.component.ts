import { Component } from '@angular/core';

import { Register } from './register.model';

@Component({
    styleUrls:['register.component.css'],
    templateUrl: 'register.component.html',
    selector: 'register',
    //providers:[SpotifyService]
})

export class RegisterComponent{
    user = new Register('', '', '', '');
  
    constructor(){}
    ngOnInit(){}

    public createUser(firstname, lastname, username,password) {
        
        this.user = new Register(firstname, lastname, username, password);
    }

    get registerUser(){
        return JSON.stringify(this.user);
    }
}