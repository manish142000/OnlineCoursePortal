import { Component, OnInit } from '@angular/core';
import { CoursePaymentService } from 'src/app/services/course-payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MycoursesService } from 'src/app/services/mycourses.service';
import { ICourse } from 'src/app/interfaces/icourse';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  constructor(
    private course : CoursePaymentService,
    private route : Router,
    private mycourse : MycoursesService
  ) {
    
  }

  courses : ICourse [] = []

  private _searchtext : string = '';

  searched_courses : ICourse [] = [];

  get searchtext(){
    return this._searchtext;
  }

  // set the search value from text box
  set searchtext(value : string){
    this._searchtext = value;
    
    this.searched_courses = this.Searching(value);
  }
  
  // for buying a specific course, emitting the course name 
  buy( cse : string){
    console.log(cse);
    this.course.emit.next(cse);
    this.route.navigate(['/payment']);
  }

  ngOnInit(): void {
     // subscribe to get all the courses in courses array
      this.mycourse.getCourses().subscribe( (res) => {
        console.log(res);
        this.courses = res;
        this.searched_courses = res;
      } )

      //filtering the courses into searched courses according to difficulty
      this.mycourse.difficulty.subscribe( (val) => {
        if( val == 'All'){
          this.searched_courses = this.courses;
        }
        else{
          this.searched_courses = this.getcoursesbyDifficulty(val);
        }
      })
  }

  getcoursesbyDifficulty(val : string){
    return this.courses.filter( (ele) => {
      return ele.difficulty === val;
    }  )
  }

  //filtering the courses according to search text variable
  Searching(searchBy:string):ICourse[]{

    searchBy = searchBy.toLocaleLowerCase();
    const temp = this.courses.filter((course:ICourse)=>
    course.name.toLocaleLowerCase().includes(searchBy));
    console.log("search by ", temp);
    return temp;
  }

  
}
