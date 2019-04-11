import { Component, OnInit } from '@angular/core';
import {SignupService} from "../../service/signup.service";
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor(private signUp:SignupService,private alertC:AlertController, private route:Router) { }
    slideOpts = {
        effect: 'flip'
    };
  ngOnInit() {}

  saveLocalMember(memeberForm){
    console.log(memeberForm.value);

    this.signUp.saveLocalMemebr(memeberForm.value).subscribe(result=>{
      if(result){
        this.presentAlert();
        this.route.navigate([""]);
      }
    })

  }


  saveForeignMemebr(memebrForm){
    var member = memebrForm.value;

      member["approve"] = false;



      this.signUp.saveForeingMemebr(member).subscribe(result=>{
        if(result){
          this.presentAlertForeign();
          this.route.navigate([""]);
        }
      })
    console.log(member);
  }
    async presentAlert() {
        const alert = await this.alertC.create({
            header: '',
            subHeader: 'SL Libaray',
            message: 'You Registerd Succefully',
            buttons: ['OK']
        });

        await alert.present();
    }


    async presentAlertForeign() {
        const alert = await this.alertC.create({
            header: '',
            subHeader: 'SL Libaray',
            message: 'You Registerd Succefully. After the libirarian approved you will receive an email, Afrer that you can login to the system',
            buttons: ['OK']
        });

        await alert.present();
    }
}
