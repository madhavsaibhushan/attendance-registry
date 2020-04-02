import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit {
  items = []
  imgSrc = "https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1.png"
  constructor(private http: HttpClient,
    private apiService: ApiService) { }

  ngOnInit() {
    this.getEmployess()
  }

  getEmployess() {
   this.apiService.get('employees').subscribe((response: any) => {
        const data = response.data
        this.items = data
      })
  }
}
