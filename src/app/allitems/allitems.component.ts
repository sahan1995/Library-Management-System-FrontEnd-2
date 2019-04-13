import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../service/item.service";
@Component({
  selector: 'app-allitems',
  templateUrl: './allitems.component.html',
  styleUrls: ['./allitems.component.scss'],
})
export class AllitemsComponent implements OnInit {

  constructor(private itemService:ItemService) { }

    private items:any;
    private role;
    private keyWord;
    private msg;
    private url="/item/"
    private itemCategory;
  ngOnInit() {
      this.role  = localStorage.getItem("role");

  }
    getItemsbyKeyWord(){

        this.itemService.getItemByKeyword(this.role,"All",this.keyWord).subscribe(result=>{

            if(result["length"]==0){
                this.msg = true;

                this.items = result;
                return;
            }
            this.msg = false;
            this.items = result;

            this.items.forEach(item=>{
                this.itemCategory = item["itemCategory"];

                if(this.itemCategory=="Book"){
                    item["imgSrc"]= "assets/books.jpg";
                }else if(this.itemCategory=="Magazine"){
                    item["imgSrc"] = "assets/magazine.jpg";
                }else if(this.itemCategory=="News Paper"){
                    item["imgSrc"] = "assets/newspaper.jpg";
                }else if(this.itemCategory=="Article"){
                    item["imgSrc"]= "assets/articles.jpg";
                }

            })
        })
    }

}
