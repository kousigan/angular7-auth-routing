import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public login = false;

  constructor() { } 
  
  authenticate(val){
    if(val==1){
      this.login = true;
    } else{
      this.login = false;
    }
  }
}