import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
})
export class LoginpageComponent implements OnInit {
  @Input('type') type: any
  constructor(private router: Router,
    private fb: FormBuilder
  ) { }
  employeeFormGroup: FormGroup
  ngOnInit() {
    this.initForm()
  }
  initForm() {
    this.employeeFormGroup = this.fb.group({
      empCode: [null, [Validators.required]],
      passCode: [null, [Validators.required]]
    })
  }
  login(type) {
    if (type === 'employee') {
      this.router.navigate(['attendance'])
    }
  }

}
