import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private fb:FormBuilder,private ps:ProductService,private router:Router){}

  addProdForm=this.fb.group({
    id: ['',Validators.required],
    productName:['',Validators.required],
    brandId: ['',Validators.required],
    brand: ['',Validators.required],
    productImg: ['',Validators.required],
    price: ['',Validators.required],
    is_available: ['',Validators.required],
    rating: ['',Validators.required]
  })
  ngOnInit():void{
    
  }
  addProd()
  {
    console.log("method");
    if(this.addProdForm.valid)
    {

      
      let pdata={
      id:this.addProdForm.value.id,
      productName:this.addProdForm.value.productName,
      brandId: this.addProdForm.value.brandId,
      brand: this.addProdForm.value.brand,
      productImg:this.addProdForm.value.productImg,
      price: this.addProdForm.value.price,
      is_available: this.addProdForm.value.is_available,
      rating: this.addProdForm.value.rating
    }
    this.ps.addProduct(pdata).subscribe((item:any)=>
    {
      alert("Product Added");
      this.router.navigateByUrl('')
    })
  }
  else
  {
    alert("Fill all fields")
  }
  }
}
