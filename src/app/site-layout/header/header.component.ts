import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchTerm:any

  constructor(private ps:ProductService){}

  ngOnInit():void{

  }

  searchData(event:any)
  {
console.log(event.target.value);
this.searchTerm=event.target.value;

this.ps.search.next(this.searchTerm)
  }
}
