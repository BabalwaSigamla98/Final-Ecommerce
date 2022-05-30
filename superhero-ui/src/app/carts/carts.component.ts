import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {

  public products: any[] = [];
  public grandTotal!: number ;
  public quantity: FormControl = new FormControl(0);
  cartItems: any[] = [];
  productservice: any;

  constructor(private cartservice :CartService) { }

  ngOnInit() : void{
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartservice.getTotalPrice();
    })
  }
  
  removeItem(product : any){
    this.cartservice.removeCartitem(product);
  }

  emptycart(){
     this.cartservice.removeAllCart();
  }
}
