import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent implements OnInit {
 
  formGroup: FormGroup
  constructor(
    private fb: FormBuilder,
    private fingerprint: FingerprintAIO) { }

  ngOnInit() {
    // this.loadFingerPrint() 
  }


  ngAfterViewInit()
  {
    this.loadFingerPrint()
  }
  initForm() {
    this.formGroup = this.fb.group({
      userNm: [null, [Validators.required]],
      password: [null, [Validators.required]] 
    })
  }
  submit() {
    console.log(this.formGroup.value);
  } 
  loadFingerPrint() {
    this.fingerprint.isAvailable().then((result)=>{
      console.log(result)
      document.getElementById('fingerprint').innerText=result
    }).catch((err)=>
    {
      document.getElementById('fingerprint').innerText=err +"error"
      
    })
  }
}
