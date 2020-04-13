import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { UtilService } from 'src/app/services/util-service.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit {
  items = []
  @ViewChild('deletedialog', { static: false }) public deletedialog: TemplateRef<any>
  imgSrc = "https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1.png"
  dialog: any;
  employeedata: any;
  constructor(private http: HttpClient,
    private apiService: ApiService,
    private router: Router,
    private utilService: UtilService,
    private matDialog: MatDialog) { }

  ngOnInit() {
    this.getEmployess()
  }

  getEmployess() {
    this.apiService.get('employees').subscribe((response: any) => {
      const data = response.data
      this.items = data
    })
  }
  update(editData) {
    this.router.navigateByUrl('hr/add-user', { state: { data: editData } })
  }
  deleteEmployee(status?, data?) {
    console.log(status)
    if (!status) {
      this.dialog = this.matDialog.open(this.deletedialog)
      this.employeedata = data
    }
    if (status === 'yes') {
      const payload = this.employeedata
      console.log(payload)
      this.apiService.post('employees/delete', payload).subscribe((res) => {
        this.utilService.presentToast('deleted successfully')
        this.dialog.close()
        this.getEmployess()
      })
    }
    else if (status === 'no') {
      this.dialog.close()
    }
  }
}
