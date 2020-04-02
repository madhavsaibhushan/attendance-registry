import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UtilService } from 'src/app/services/util-service.service';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
})
export class LoginpageComponent implements OnInit {
  @Input('type') type: any
  constructor(private router: Router,
    private httpClient: HttpClient,
    private fb: FormBuilder,
    public utilService: UtilService,
    private apiService:ApiService
  ) { }
  employeeFormGroup: FormGroup
  ngOnInit() {
    this.initForm()
    localStorage.setItem('token',null)
  }
  initForm() {
    this.employeeFormGroup = this.fb.group({
      empCode: [null, [Validators.required]],
      passCode: [null, [Validators.required]]
    })
  }


  async  login(type) {
    if (type === 'employee') {
      const payload = {
        empName: this.employeeFormGroup.get('empCode').value,
        empPassword: this.employeeFormGroup.get('passCode').value,
        type: 'something'
      }
      const loginStatus: any = await this.commonLoginRequest(payload).catch((err) => {
        this.employeeFormGroup.setErrors({wrongCredentials:true})
        return this.utilService.presentToast('Unable to login')
      })
      if (loginStatus.status = "Authorized") {
        return this.router.navigate(['attendance'])
      }
    }
    if (type === 'hr') {
      const payload = {
        empName: this.employeeFormGroup.get('empCode').value,
        empPassword: this.employeeFormGroup.get('passCode').value,
        type: 'hr'
      }
      const loginStatus: any = await this.commonLoginRequest(payload).catch((err) => {
        this.employeeFormGroup.setErrors({wrongCredentials:true})
      
        return this.utilService.presentToast('Unable to login')
      })
      console.log(loginStatus)
      if (loginStatus.status = "Authorized") {
        localStorage.setItem('token',loginStatus.token)
        return this.router.navigate(['hr'])
      }

    }
  }
  commonLoginRequest(payload) {
    return this.apiService.post('employees/login/hr', payload).toPromise()
  }
}
