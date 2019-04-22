import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
    private url = "http://192.168.1.101:8080/api/v1/";

    constructor(private http: HttpClient) {
    }

    getAllItems(itemCategory) {

        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Basic ' +btoa("library:library123")
            })
        };
        return this.http.get(this.url + "items/byItemCategory/" + itemCategory,httpOptions);
    }

    getItemByKeyword(role, category, keyword) {

        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Basic ' +btoa("library:library123")
            })
        };
        return this.http.get(this.url + "items/findByAny/" + role + "/" + category + "/" + keyword,httpOptions);
    }


    getItems(itemCategort, category) {

        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Basic ' +btoa("library:library123")
            })
        };
        return this.http.get(this.url + "items/findItemCat&Cat/" + itemCategort + "/" + category,httpOptions);
    }

    getItemByID(ID){

        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Basic ' +btoa("library:library123")
            })
        };
        return this.http.get(this.url+"items/"+ID,httpOptions);
    }
}
