import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-menu',
  templateUrl: './hr-menu.component.html',
  styleUrls: ['./hr-menu.component.scss'],
})
export class HrMenuComponent implements OnInit {
  listOfMenuOptions = [
    {
      title: 'Add a New Employee'
    },
    {
      title: 'Check the Attendance Status'
    },
    {
      title: 'Attendance Report'
    },
  ]
  constructor(private router: Router) { }

  ngOnInit() { }

  routeToPage(pageName) {
    console.log(pageName)
    switch (pageName) {
      case this.listOfMenuOptions[0].title:
        this.router.navigate(['hr/add-user']);
        break;
      case this.listOfMenuOptions[1].title:
        this.router.navigate(['hr/attendance-status']);
        break;
      case this.listOfMenuOptions[2].title:
        this.router.navigate(['hr/report']);
        break;
    }
  }
}
