import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  
  products= [{
    serviceId: '',
    servicename: '',
    serviceservice: '',
    servicearea: '',
    servicepincode: '',
    servicephonenumber: '',
}]
  constructor(private productService: ServiceService,private router: Router) { }

  ngOnInit(): void{
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
  })
  }
  hire(){
    alert("will contact you soon")
  }
}
