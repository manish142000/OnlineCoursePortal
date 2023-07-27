import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  visible : boolean = false;

  login : boolean = true;

  // to toggle to login page
  showLogin(){
    this.login = true;
  }

  //to toggle to register page
  showRegister(){
    this.login = false;
  }

  // toggling the entire modal itself
  toggleModal(){
    this.visible = !this.visible;
  }


  toggleLogin(){
    this.login = !this.login
  }
}
