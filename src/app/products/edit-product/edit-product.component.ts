import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  pid:any
  pdata:any

  id: any
  productName:any
    brandId: any
    brand: any
    productImg:any
    price:any
    is_available: any
    rating: any
    ngForm:any
    updateProductForm:any
  constructor(private ar:ActivatedRoute,private ps:ProductService,private router:Router){

  }

  ngOnInit():void
  {
    this.ar.params.subscribe((data:any)=>
    {
      this.pid=data["id"]
    })

    this.ps.viewProduct(this.pid).subscribe((item:any)=>
    {
      this.pdata=item;
      console.log(this.pdata);
    })
  }

  updateProduct(form:any)
  {
    this.ps.editProduct(this.pid,this.pdata).subscribe((item:any)=>{
      alert("Updated")
      this.router.navigateByUrl("products")
    })
  }
 
}
