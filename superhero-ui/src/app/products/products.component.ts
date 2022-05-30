import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


  
  export class ProductsComponent {
    products: any[] = [];
    searchKey : string ="";

    constructor(
      private productservice: ProductService, 
      private route : ActivatedRoute,
      private cartService : CartService
    ){}

    ngOnInit(): void {
      this.productservice.getProducts().subscribe((products: any )=>{
        console.log(products);
        this.products=products;

        this.products.forEach((a:any)=>{
          Object.assign(a,{quantity:1,total:a.price});

        });
      });
       this.cartService.search.subscribe((val: any)=>{
         this.searchKey = val ;
       })

    }
    
    addtoCart(product: any) {
      this.cartService.addtoCart(product);
      
    }
      
    
    
    
  }


