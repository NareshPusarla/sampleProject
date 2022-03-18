import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient:HttpClient) { }

  postData(url:string, reqData:any={}, token:boolean=false, httpoptions:any={}){
    console.log(reqData);
    return this.httpClient.post(reqData, token && httpoptions)
  }

  getData(url:string, token:boolean=false, httpoptions:any={}){
    return this.httpClient.get(token && httpoptions)
  }

  putData(url:string, reqData:any={}, token:boolean=false, httpoptions:any={}){
    return this.httpClient.put(reqData, token && httpoptions)
  }
}
