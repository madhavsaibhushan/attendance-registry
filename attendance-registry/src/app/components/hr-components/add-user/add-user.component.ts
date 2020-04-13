import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util-service.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  formGroup: FormGroup;
  departmentsList = [
    { name: 'DB' },
    {
      name: "JAVA"
    },
    {
      name: "UI"
    }, {
      name: "DEVOPS"
    }
    , {
      name: "BA"
    }
  ]
  editData: { [k: string]: any; };
  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private utilService: UtilService,
    private toastController: ToastController,
    private router: Router,
    private apiService: ApiService) { }

  ngOnInit() {
    this.initForm();
    this.checkEdit()
  }
  checkEdit() {
    this.editData = this.router.getCurrentNavigation().extras.state
    if (this.editData) {
      delete this.editData.data.empPassword
      this.formGroup.patchValue(this.editData.data)
    }

  }
  initForm() {
    this.formGroup = this.fb.group({
      empName: [, [Validators.required]],
      empId: [null, [Validators.required]],
      empDept: [null, [Validators.required]],
      empDoj: [null, [Validators.required]],
      empPassword: [null, [Validators.required]]
    })
  }
  async  addEmployee() {
    const payload = this.formGroup.value
    payload._id = this.editData && this.editData.data ? this.editData.data._id : null
    console.log(payload)
    let loader = await this.utilService.presentLoading()
    await loader.present()
    this.apiService.post('employees', payload).subscribe((response) => {
      if (response) {
        loader.dismiss()
        this.utilService.presentToast('User Has Been added Successfully');
        this.formGroup.reset()
      }
    })
  }


}
