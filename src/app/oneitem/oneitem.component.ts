import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../../service/item.service";

@Component({
  selector: 'app-oneitem',
  templateUrl: './oneitem.component.html',
  styleUrls: ['./oneitem.component.scss'],
})
export class OneitemComponent implements OnInit {

  constructor(private router:ActivatedRoute,private ItemS:ItemService) { }

  private itemCode;
  private itemCategory;
  private title;
  private author;
  private publisher;
  private year;
  private bookCatagory;
  private price;
  private isbn;
  private floor;
  private cupBoard;
  private imgSrc;
  ngOnInit() {
    this.itemCode = this.router.snapshot.params.id;
    this.getItemByItemCode();


  }






  getItemByItemCode(){
    this.ItemS.getItemByID(this.itemCode).subscribe(result=>{
      this.itemCategory = result["itemCategory"]
      this.title = result["title"]
      this.author = result["author"]
      this.publisher = result["publisher"]
      this.year = result["year"]
      this.bookCatagory = result["bookCatagory"]
      this.price = result["price"]
      this.isbn = result["isbn"]
      this.floor=result["floor"];
      this.cupBoard=result["cupBoard"];

      if(result["stock"]=="Out of Stock"){
          this.imgSrc = "assets/outofstock.JPG";
          return;
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
    })
  }
}



