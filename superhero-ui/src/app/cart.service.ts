import { isNgTemplate } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn : 'root'
})
export class CartService {
  public cartItems : any =[]
  public products = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  constructor(){}
  getProducts(){
    return this.products.asObservable();
  }
  setProduct(item : any){
    this.cartItems.push(...item);
    this.products.next(item);
  }
  addtoCart(item : any){
    this.cartItems.push(item);
    this.products.next(this.cartItems);
    this.getTotalPrice();
    console.log(this.cartItems);
  }
  getTotalPrice(): number{
    let grandTotal= 0;
    this.cartItems.map((a:any)=>{
      grandTotal += a.total;

    })
    return grandTotal;
  }
  removeCartitem(item : any){
    this.cartItems.map((a:any, index:any)=>{
      if(item.id === a.id){
        this.cartItems.splice(index,1);
      }
    })
    this.products.next(this.cartItems);

  }
  removeAllCart(){
    this.cartItems = []
    this.products.next(this.cartItems);
  }
  // getCartItems(): any[] {
  //   throw new Error('Method not implemented.');
  // }

  // private localCart: string = 'localCart';
  // cartItems: any[] = [];

  // removeCartItem(product: any) {
  //   // var index = this.cartItems.findIndex(x => x.)
  //   // this.cartItems.splice(index,1)
  // }

  // addToCart(product: any) {
  //   this.cartItems.push(product);
  //   localStorage.setItem(this.localCart, JSON.stringify(this.cartItems));
  //   //this.getTotalPrice();
  // }
  //getTotalPrice(){
   // let grandTotal=0;
    //this.cartItems.map((a:any)=>{
     // grandTotal += a.total;
   // })
 // }

  // getCartItems() {
  //   var data = localStorage.getItem(this.localCart);
  //   if (data) {
  //     return this.cartItems = JSON.parse(data);
  //   }
  // }

  // clearCart() {
  //   this.cartItems = [];
  //   return this.cartItems;
  // }

// getCartItems() {
//   throw new Error("Function not implemented.");
// }

//  clearCart() {
//   throw new Error("Function not implemented.");
// }
}

