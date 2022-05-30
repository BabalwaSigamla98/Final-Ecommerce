import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  public totalItem : number = 0;
  public  searchTerm : string = '';

  constructor(private observer: BreakpointObserver, private cartservice : CartService) { }

  ngAfterViewInit(): void {
    this.observer.observe(["(max-width: 800px)"]).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = "over";
        this.sidenav.close();
        // Testing
        var myVar = 5;
        document.body.className = (myVar == 5 ? "active" : "normal");
        //========
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    })
  }
  ngOnInit(): void{
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
   search(event:any){
     this.searchTerm =(event.target as HTMLInputElement).value;
     console.log(this.searchTerm);
     this.cartservice.search.next(this.searchTerm);

   }

}
