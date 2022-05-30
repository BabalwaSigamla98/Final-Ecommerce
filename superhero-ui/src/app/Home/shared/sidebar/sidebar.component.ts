import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  // goToLogin() {
  //   this.route.navigateByUrl('/login');
  // }
  

}
