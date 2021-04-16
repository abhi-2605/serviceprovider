import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service'


@Component({
  selector: 'app-joinform',
  templateUrl: './joinform.component.html',
  styleUrls: ['./joinform.component.css']
})
export class JoinformComponent implements OnInit {

  constructor(private productService: ServiceService,private router: Router) { }
  productItem= {
    serviceId: '',
    servicename: '',
    serviceservice: '',
    servicearea: '',
    servicepincode: '',
    servicephonenumber: '',
}

  ngOnInit(): void {
  }
    AddProduct()
  {    
    this.productService.newProduct(this.productItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/card']);
  }

}
