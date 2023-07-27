import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICourse } from '../interfaces/icourse';
import { tap, map } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MycoursesService {

  duration = new BehaviorSubject<number>(0);

  difficulty = new BehaviorSubject<string>("All");

  constructor(
    private http : HttpClient
  ) { }

  course_url = '/assets/courses.json';

  getCourses(){
    return this.http.get<ICourse []>(this.course_url).pipe(
      tap( (res : ICourse []) => console.log(res) )
    )
  }  

  getCourse(name: string){
    return this.getCourses().pipe( 
      map(  (res : ICourse [])  => res.find( m => m.name == name )
  )
    );
  }

  getduration(){
    this.duration.next(1);
  }


  getDifficulty( diff: string ){
    this.difficulty.next(diff);
  }

} 
