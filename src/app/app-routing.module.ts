import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmincardComponent } from './admincard/admincard.component';
import { CardComponent } from './card/card.component';

import { HomeComponent } from './home/home.component';
import { JoinformComponent } from './joinform/joinform.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [{path:"", component:HomeComponent}, {path:"service" , component:NavComponent} ,  {path:"service/tojoin" , component:JoinformComponent},{path:"login" , component:LoginpageComponent} , {path:"login/signup", component:SignupComponent },{path:"card", component:CardComponent} , {path:"admincard" , component:AdmincardComponent } ,{path:"update" , component:UpdateComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
