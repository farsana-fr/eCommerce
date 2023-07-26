import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit{
  pid:any
  constructor(private ar:ActivatedRoute,private ps:ProductService,private router:Router)
  {

  }
  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>
    {
      this.pid=data["id"]
    }
    )

    this.ps.deleteProduct(this.pid).subscribe((item:any)=>{
      console.log(item);
      alert("Product Deleted")
      this.router.navigateByUrl("")
    })
  }
}
