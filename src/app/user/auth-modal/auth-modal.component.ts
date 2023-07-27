import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent {
  
  constructor(
    private modal : ModalService,
    public auth : AuthService
  ) {
       
  }

  showLogin(){
    return this.modal.login;
  }

  
  onLogin(){
    this.modal.showLogin();
  }

  onRegister(){
    this.modal.showRegister();
  }

  showModal(){
    return this.modal.visible;
  }

  closeModal(){
    this.modal.toggleModal();
  }
}
