import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/iuser';
import { tap, map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs'
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<IUser|null>(null);

  public isAuthenticated$ : Observable<boolean>;
  public isAuthenticatedDelay$ : Observable<boolean>;

  constructor(
    private http : HttpClient
  ) { 

    this.isAuthenticated$ = this.user.pipe( 
      map( user => !!user )
    )

    this.isAuthenticatedDelay$ = this.isAuthenticated$.pipe(
      delay(1500)
    )

  } 

  users_url = "/assets/users.json";

  

  getUsers(){
    return this.http.get<IUser []>(this.users_url).pipe(
      tap( users => console.log("These are the users ", users) ) 
    )   
  }

  Login( user : IUser ){
    return this.getUsers().pipe(
      map( (users : IUser []) => users.find( m => m.email == user.email ) )
    );
  }

  Logout(){
    this.user.next(null);
  }

}
