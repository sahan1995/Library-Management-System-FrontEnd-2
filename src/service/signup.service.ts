import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

    private url= "http://192.168.1.101:8080/api/v1/";


  saveLocalMemebr(localMemebr){

      const httpOptions = {
          headers: new HttpHeaders({
              'Authorization': 'Basic ' +btoa("library:library123")
          })
      };
    return this.http.post(this.url+"localmemebrs",localMemebr,httpOptions);
  }

  saveForeingMemebr(foreignMember){

      const httpOptions = {
          headers: new HttpHeaders({
              'Authorization': 'Basic ' +btoa("library:library123")
          })
      };
    return this.http.post(this.url+"foreignmembers",foreignMember,httpOptions);
}
}
