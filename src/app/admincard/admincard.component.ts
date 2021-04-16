import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service'
@Component({
  selector: 'app-admincard',
  templateUrl: './admincard.component.html',
  styleUrls: ['./admincard.component.css']
})
export class AdmincardComponent implements OnInit {
  products= [{
    serviceId: '',
    servicename: '',
    serviceservice: '',
    servicearea: '',
    servicepincode: '',
    servicephonenumber: '',
}]
  constructor(private productService: ServiceService,private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
  })
}
deleteProduct(product:any)
  {
    this.productService.deleteProduct(product._id)
      .subscribe((data) => {
        this.products = this.products.filter(p => p !== product);
      })
  

  }

  editProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(['/update']);

  }
}
