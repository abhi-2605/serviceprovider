import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';

import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:"", component:HomeComponent}, {path:"service" ,component:NavComponent} ,  {path:"service/tojoin" , component:CardComponent},{path:"login" , component:LoginpageComponent} , {path:"login/signup", component:SignupComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
