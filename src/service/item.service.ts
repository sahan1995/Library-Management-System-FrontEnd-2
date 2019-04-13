import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
    private url = "http://192.168.1.101:8080/api/v1/";

    constructor(private http: HttpClient) {
    }

    getAllItems(itemCategory) {
        return this.http.get(this.url + "items/byItemCategory/" + itemCategory);
    }

    getItemByKeyword(role, category, keyword) {
        return this.http.get(this.url + "items/findByAny/" + role + "/" + category + "/" + keyword);
    }


    getItems(itemCategort, category) {
        return this.http.get(this.url + "items/findItemCat&Cat/" + itemCategort + "/" + category);
    }

    getItemByID(ID){
        return this.http.get(this.url+"items/"+ID);
    }
}
