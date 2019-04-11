import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http:HttpClient) { }

    private url= "http://192.168.1.101:8080/api/v1/";
  signIN(username,password){

    return this.http.get(this.url+"/users/login/"+username+"/"+password);
  }
}
