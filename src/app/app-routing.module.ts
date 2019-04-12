import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomePageModule} from "./home/home.module";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {ItemsPageModule} from "./items/items.module";
import {ItemsPage} from "./items/items.page";
import {BooksComponent} from "./books/books.component";
import {MagazinesComponent} from "./magazines/magazines.component";

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component:SigninComponent},
  { path: 'signUp', component:SignupComponent},
  { path: 'home', component:HomepageComponent},
  { path: 'items', loadChildren: './items/items.module#ItemsPageModule' },
  { path: 'books', component:BooksComponent},
  { path: 'magazines', component:MagazinesComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SigninComponent,SignupComponent,HomepageComponent,BooksComponent,MagazinesComponent]