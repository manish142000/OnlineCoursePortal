import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  visible : boolean = false;

  login : boolean = true;

  showLogin(){
    this.login = true;
  }

  showRegister(){
    this.login = false;
  }

  toggleModal(){
    this.visible = !this.visible;
  }


  toggleLogin(){
    this.login = !this.login
  }
}
