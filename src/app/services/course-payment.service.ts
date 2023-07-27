import { Injectable } from '@angular/core';

import  { BehaviorSubject }  from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursePaymentService {

  constructor() { }

  emit = new BehaviorSubject<string|null>(null);
  
  should_add = new BehaviorSubject<Boolean|null>(false);
}
