import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import   {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn : 'root'
})
export class ProductService {
  // Local variable which stores

  public cartItems = [];
  public products: any[] = [];
  public Tamount = new Subject<number>();

 constructor(private http : HttpClient){}

 getcart() : any{
     return this.cartItems; }


  getProducts(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/Product`);
  }

  addToCart(product: any) {
    this.products.push(product);
  }

  // setProducts(products : any ) {
  //   this.cartItems.push(...product);
  //   this.products.next(products);
  // }

  // Add single product to the cart
//   addProductToCart(product) {
//     this.cartItems.push(product);
//     this.products.next(this.cartItems);
//   }

  // Remove single product from the cart
//   removeProductFromCart(id) {
//     this.cartItems.map((item, index) => {
//       if (item.id === Id) {
//         this.cartItems.splice(index, 1);
//       }
//     });

    // Update Observable value
//     this.products.next(this.cartItems);
//   }

  // Remove all the items added to the cart
  // emptyCart() {
  //   this.cartItems.length = 0;
  //   this.products.next(this.cartItems);
  // }

  // Calculate total price on item added to the cart
  // getTotalPrice() {
  //   let total = 0;
  //   let price = 0;

  //   this.cartItems.map(products => {
  //     total += products.price;
  //   });

  //   return total
  // }

}
