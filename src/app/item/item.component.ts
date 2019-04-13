import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../../service/item.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

  constructor(private router:ActivatedRoute,private itemService:ItemService) { }

  private itemCategory;
  private imgSrc;
  private items:any;
  private role;
  private keyWord;
  private msg = false;
    private url = "/item/";
  ngOnInit() {
      this.itemCategory = this.router.snapshot.params.type;
      this.role  = localStorage.getItem("role");
      if(this.role=="local"){
          this.getAllItemsByCategory();
      }else{
          this.getItemsByCategory("Public");
      }

    if(this.itemCategory=="Book"){
      this.imgSrc = "assets/books.jpg";
    }else if(this.itemCategory=="Magazine"){
        this.imgSrc = "assets/magazine.jpg";
    }else if(this.itemCategory=="News Paper"){
        this.imgSrc = "assets/newspaper.jpg";
    }else if(this.itemCategory=="Article"){
        this.imgSrc = "assets/articles.jpg";
    }
  }


    getAllItemsByCategory(){


        this.itemService.getAllItems(this.itemCategory).subscribe(result=>{

            if(result["length"]==0){

                this.items = result;
                return;
            }
            this.msg = false;
            this.items = result;
        })
    }

    getItemsbyKeyWord(){

        this.itemService.getItemByKeyword(this.role,this.itemCategory,this.keyWord).subscribe(result=>{

            if(result["length"]==0){
                this.msg = true;

                this.items = result;
                return;
            }
            this.msg = false;
            this.items = result;
        })
    }

    getItemsByCategory(catgory){

        this.itemService.getItems(this.itemCategory,catgory).subscribe(result=>{
            if(result["length"]==0){
                this.msg = true;

                this.items = result;
                return;
            }
            this.msg = false;
            this.items = result;

        })
    }






}
