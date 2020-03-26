import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  formGroup: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm()
  }
  initForm() {
    this.formGroup = this.fb.group({
      empName: [, [Validators.required]],
      empCode: [null, [Validators.required]],
      empDepartment: [null, [Validators.required]],
      empDoj: [null, [Validators.required]],
    })
  }
}
