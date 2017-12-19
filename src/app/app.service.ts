import { Injectable } from '@angular/core';
 
 @Injectable()
 export class appService {  
    public name: string;
    setName(username) { 
        this.name = username; 
     }
 } 