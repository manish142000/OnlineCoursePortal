import { Component } from '@angular/core';
import { CoursePaymentService } from 'src/app/services/course-payment.service';
import {CookieService} from 'ngx-cookie-service';
import { ICourse } from 'src/app/interfaces/icourse';
import { MycoursesService } from 'src/app/services/mycourses.service';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent {

  constructor( 
    private pay_serve : CoursePaymentService,
    private cookie : CookieService,
    private course_service : MycoursesService
   ) {
    
  }

  courses : ICourse [] = []

  ngOnInit(): void {

    this.pay_serve.should_add.subscribe( (res)=>{
      if( res ){
        this.pay_serve.should_add.next(false);
        this.pay_serve.emit.subscribe( (val)=>{
          if(val){
            this.cookie.set(val, val);
          }
        })
      }
    } )

    var courses_from_cookies = this.cookie.getAll();



    for( let key in courses_from_cookies ){
      let val = courses_from_cookies[key];

      this.course_service.getCourse(val).subscribe( (res) => {
        if(res) this.courses.push(res);
      } )
    }

  }
}
