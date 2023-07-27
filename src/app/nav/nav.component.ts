import { Component, Output,EventEmitter } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  
  @Output() sideNavToggle = new EventEmitter<boolean>()
  sideNavOpen:boolean = false;

  constructor(
    private modal : ModalService,
    public auth : AuthService
  ) {
  
  }

  openModal(){
    this.modal.toggleModal();
  }

  sideNavToggle2(){
    this.sideNavOpen=!this.sideNavOpen;
    this.sideNavToggle.emit(this.sideNavOpen);
  }

}
