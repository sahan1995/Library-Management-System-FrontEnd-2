import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../service/item.service";

@Component({
  selector: 'app-magazines',
  templateUrl: './magazines.component.html',
  styleUrls: ['./magazines.component.scss'],
})
export class MagazinesComponent implements OnInit {

  constructor(private itemService:ItemService) { }
    private magazines:any;
    private role;
    private keyWord;
    private msg = false;
  ngOnInit() {

      this.role  = localStorage.getItem("role");
      if(this.role=="local"){
          this.getAllMagazine();
      }else{
          this.getMagazineByCategory("Public");
      }
  }

    getAllMagazine(){

        this.itemService.getAllItems("Magazine").subscribe(result=>{


            if(result.length==0){

                this.books = result;
                return;
            }
            this.msg = false;
            this.magazines = result;
        })
    }

    getMagazinebyKeyWord(){
        this.itemService.getItemByKeyword(this.role,"Magazine",this.keyWord).subscribe(result=>{

            if(result.length==0){
                this.msg = true;

                this.magazines = result;
                return;
            }
            this.msg = false;
            this.magazines = result;
        })
    }

    getMagazineByCategory(catgory){

        this.itemService.getItems("Magazine",catgory).subscribe(result=>{
            if(result.length==0){
                this.msg = true;

                this.magazines = result;
                return;
            }
            this.msg = false;
            this.magazines = result;
        })
    }


}
