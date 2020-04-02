import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util-service.service';
import { ApiService } from 'src/app/services/api.service';

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
  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private utilService: UtilService,
    private toastController: ToastController,
    private apiService: ApiService) { }

  ngOnInit() {
    this.initForm()
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
