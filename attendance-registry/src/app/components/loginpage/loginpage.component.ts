import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
})
export class LoginpageComponent implements OnInit {
  @Input('type') type: any
  constructor(private router: Router) { }

  ngOnInit() {

  }
  login(type) {
    if (type === 'employee') {
      this.router.navigate(['checkin'])
    }
  } 

}
