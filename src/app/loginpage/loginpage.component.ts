import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../loginauth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  
  user:any;
  pass:any;
  
  accntObj:any;

  constructor(private router:Router, private signupService: AuthService) { }
  btnClick=  () => {
    this.router.navigateByUrl('login/signup');
};
User={
  serviceuser:'',
  servicepass:''
};

  ngOnInit(): void {
  }


  checkpass(){
  this.signupService.searchAccount(this.user)
  .subscribe(data => {
    this.accntObj = data;
    if(this.accntObj!= null)
    {
      if(this.accntObj.servicepass == this.pass && this.accntObj.serviceuser == this.user)
      {
        alert("  Welcome");
        this.router.navigate(["/service"]);
      }
     
      else
      {
        alert("Wrong credentials, try again !!!");
      }

    }
    else
    {
      alert("Wrong credentials, try again !!!");
    }
  if(this.user=="123@gmail.com"&& this.pass=="admin123"){
        
      this.router.navigate(["admincard"]);
    }
  });
  

}
}
