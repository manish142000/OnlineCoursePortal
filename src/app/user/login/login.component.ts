import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from 'src/app/interfaces/iuser';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

     constructor(
      private auth : AuthService,
      private route : Router
     ) {

     }
     // reactive form for login page
     loginForm =  new FormGroup( {
      email : new FormControl<string>("", [
        Validators.required
      ]),
      password : new FormControl<string>("", [
        Validators.required
      ])
     });

     //fetch values from form and check whether login credentials are correct or not
     // emit the user once logged in
     login(){
      let values = this.loginForm.value;

      if( !values.email || !values.password ) return;

      const user : IUser = {
        email : values.email,
        password : values.password
      }

      this.auth.Login( user ).subscribe( 
        (user) => {
            if( user ){
              this.auth.user.next(user);
            }
            setTimeout( () => {
              this.route.navigate(['mylearning']);
            } , 2000)
        }
       )

    }
}
