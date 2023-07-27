import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { CoursePaymentService } from 'src/app/services/course-payment.service';


@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {

  constructor(
    private course : CoursePaymentService,
    private route : Router
  ) {

  }


  paymentForm = new FormGroup({
    name : new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ]),
    cardNumber : new FormControl("", [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
    ])
    ,
    exp_date : new FormControl(new Date(), [
      Validators.required
    ]),
    cvv : new FormControl("", [
      Validators.required,
      Validators.maxLength(3),
      Validators.minLength(3)
    ])
  })


  //below function emits truth value if payment is successful
  add(){

    this.course.should_add.next(true);

    this.route.navigate(['/mylearning']);
  }
}
