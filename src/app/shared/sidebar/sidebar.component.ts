import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { MycoursesService } from 'src/app/services/mycourses.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

  constructor(

    public sidebar : SidebarService,
    public mycourse : MycoursesService

  ) {
    
    
  }

  mycourses_visibility : boolean = false;
  catalogue_visibility : boolean = true;
    change_view( id : string ){
      this.mycourses_visibility = false;
      this.catalogue_visibility = false;
      if( id == 'mycourses'){
        this.mycourses_visibility = true;
      }
      else if( id == 'catalogue' ){
        this.catalogue_visibility = true;
      }
    }

    callDifficulty(difficulty : string){
      this.mycourse.getDifficulty(difficulty);
    }
}
