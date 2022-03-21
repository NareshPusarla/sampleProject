import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  // header:any;
  
  constructor(private httpService: HttpServiceService) { 
    // this.header={
    //   headers:new HttpHeaders({
    //     'Content-Type':'application/json'
    //   })
    // }
  }

  userLogin(data:any){
    return this.httpService.postData('user/login', data, false)
  }

  updatePassword(data:any){
    return this.httpService.putData('user/reset-password', data, false)
  }

  emailExists(email: string): Observable<boolean>{
    return of(email).pipe(
      delay(500),
      map((email) => {
        const emails = ['nareshn2213@gmail.com', 'pnareshsatya@gmail.com'];
        return emails.includes(email);
      })
    );
  }

  uniqueEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.emailExists(control.value).pipe(
        map((exists) => (exists ? {emailExists:true} : null)),
        catchError(async (err) => null)
      );
    };
  }
}
