import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  HomepageMenu = []
  constructor(private router: Router) { }
  ngOnInit() {
    this.HomepageMenu = [
      {
        title: "Check In",
        ImagePath: 'check-in.svg',
        url: 'checkin'
      },
      {
        title: "Check Out",
        ImagePath: 'check-in.svg',
        url: 'checkin'
      }, {
        title: "Settings",
        ImagePath: 'check-in.svg',
        url: 'settings'
      }, {
        title: "Hr Register",
        ImagePath: 'check-in.svg',
        url: 'attendance'
      }
    ]
  }
  /**
   * 
   * this methods gets the url from aarray and Navigates
   */
  routing(url) {
    this.router.navigate([`./${url}`])
  }
}
