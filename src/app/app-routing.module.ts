import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomePageModule} from "./home/home.module";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {ItemComponent} from "./item/item.component";
import {OneitemComponent} from "./oneitem/oneitem.component";
import {AllitemsComponent} from "./allitems/allitems.component";

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component:SigninComponent},
  { path: 'signUp', component:SignupComponent},
  { path: 'home', component:HomepageComponent},

  // { path: 'items', loadChildren: './items/items.module#ItemsPageModule' },
  { path: 'items/:type', component:ItemComponent },
  { path: 'item/:id', component:OneitemComponent },
  { path: 'allitems', component:AllitemsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SigninComponent,SignupComponent,HomepageComponent,ItemComponent,OneitemComponent,AllitemsComponent]