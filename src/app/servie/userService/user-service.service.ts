import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  header:any;
  
  constructor(private httpService: HttpServiceService) { 
    this.header={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
  }

  userLogin(data:any){
    return this.httpService.postData('user/login', data, false, this.header)
  }

  updatePassword(data:any){
    return this.httpService.putData('user/reset-password', data, false, this.header)
  }
}
