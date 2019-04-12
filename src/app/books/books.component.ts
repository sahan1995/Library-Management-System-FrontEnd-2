import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";
import {ItemService} from "../../service/item.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {

  constructor(private itemService:ItemService) { }

  private books:any;
  private role;
  private keyWord;
  private msg = false;
  private bookDiv = true;
  ngOnInit() {
      this.role  = localStorage.getItem("role");
    if(this.role=="local"){
        this.getAllBooks();
    }else{
      this.getBooksByCategory("Public");
    }


  }



  getAllBooks(){

    this.itemService.getAllItems("Book").subscribe(result=>{


      if(result.length==0){

          this.books = result;
        return;
      }
        this.msg = false;
     this.books = result;
    })
  }

  getBookbyKeyWord(){
    this.itemService.getItemByKeyword(this.role,"Book",this.keyWord).subscribe(result=>{

        if(result.length==0){
            this.msg = true;

            this.books = result;
            return;
        }
        this.msg = false;
        this.books = result;
    })
  }

  getBooksByCategory(catgory){

    this.itemService.getItems("Book",catgory).subscribe(result=>{
        if(result.length==0){
            this.msg = true;

            this.books = result;
            return;
        }
        this.msg = false;
        this.books = result;
    })
  }
}
