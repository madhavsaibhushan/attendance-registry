import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance-register',
  templateUrl: './attendance-register.component.html',
  styleUrls: ['./attendance-register.component.scss'],
})
export class AttendanceRegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.initTimer();
  }

  goBack() {
    this.router.navigate(['home'])
  }

  initTimer() {
    setTimeout(() => {
      this.goBack()
    }, 10000)
  }

}
