import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  item= {
    serviceId: '',
    servicename: '',
    serviceservice: '',
    servicearea: '',
    servicepincode: '',
    servicephonenumber: '',

 }

  constructor(private http: HttpClient) { }

  getProduct(id:any){
    return this.http.get("http://localhost:1212/"+id);
  }
  getProducts(){
    return this.http.get('http://localhost:1212/servicedetails');
  }

  newProduct(item:any)
  {   
    return this.http.post("http://localhost:1212/insert",{"product":item})
    .subscribe(data =>{console.log(data)})
  }

  deleteProduct(id:any)
  {

    return this.http.delete("http://localhost:1212/remove/"+id)

  }
  editProduct(product:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:1212/update",product)
    .subscribe(data =>{console.log(data)})
  }

}
