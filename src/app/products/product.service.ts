import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  viewAllProduct()
  {
  return this.http.get('http://localhost:3000/products')
  }

  // view single product
  viewProduct(pid:any)
  {
    return this.http.get(`http://localhost:3000/products/${pid}`)
  }
}
