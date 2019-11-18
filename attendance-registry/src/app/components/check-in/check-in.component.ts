import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent implements OnInit {

  formGroup: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {  
    this.initForm();
    console.log("ate")
  }
  initForm() {
    this.formGroup = this.fb.group({
      userNm: [null,[Validators.required]],
      password: [null,[Validators.required]]
    })
  }
  submit() {
    console.log(this.formGroup.value);
  }
}
