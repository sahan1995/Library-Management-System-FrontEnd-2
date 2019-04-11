import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";
import {SigninService} from "../../service/signin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  constructor(private alertC:AlertController,private signINS:SigninService,private route:Router) { }
private useName;
private password;
  ngOnInit() {}



  signIN(){
      this.signINS.signIN(this.useName,this.password).subscribe(result=>{
          if(result==null){
              this.presentAlert();
              return;
          }
          localStorage.setItem("NIC",result["nic"]);
          localStorage.setItem("fulname",result["fullname"]);
          localStorage.setItem("role",result["role"]);

          this.route.navigate(["home"])
          console.log(result);
      })
  }

    async presentAlert() {
        const alert = await this.alertC.create({
            header: 'Warning',
            subHeader: 'SL Libarary',
            message: 'User name or Password Incorrect! ',
            buttons: ['OK']
        });

        await alert.present();
    }
  model(){

  }

}
