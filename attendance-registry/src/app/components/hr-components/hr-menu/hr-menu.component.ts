import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

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
    {
      title: 'List of Employess'
    },
    {
      title: 'Log Out'
    }
  ]
  constructor(private router: Router,
    private apiService: ApiService) { }

  ngOnInit() {
  }

  routeToPage(pageName) {
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
      case this.listOfMenuOptions[3].title:
        this.router.navigate(['hr/employees-list']);
        break;
      case this.listOfMenuOptions[4].title:
        this.logOut();
        break;

    }
  }
  logOut() {
    this.apiService.post('employees/logout', {}).subscribe((res) => {
      this.router.navigateByUrl('/')
      console.log(res)
      localStorage.setItem('token', null)
    })
  }
}
