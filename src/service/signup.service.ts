import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

    private url= "http://localhost:8080/api/v1/";


  saveLocalMemebr(localMemebr){
    return this.http.post(this.url+"localmemebrs",localMemebr);
  }

  saveForeingMemebr(foreignMember){
    return this.http.post(this.url+"foreignmembers",foreignMember);
}
}
