import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  
  search=new BehaviorSubject("")

  
  viewAllProduct()
  {
  return this.http.get('http://localhost:3000/products')
  }

  // view single product
  viewProduct(pid:any)
  {
    return this.http.get(`http://localhost:3000/products/${pid}`)
  }

  deleteProduct(pid:any)
  {
    return this.http.delete(`http://localhost:3000/products/${pid}`)
  }
  addProduct(pdata:any)
  {
    return this.http.post('http://localhost:3000/products/',pdata)
  }

  editProduct(pid:any,pdata:any)
  {
    return this.http.put('http://localhost:3000/products/',pid,pdata)
  }
}
