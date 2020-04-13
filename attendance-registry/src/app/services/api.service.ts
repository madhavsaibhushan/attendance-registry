import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://192.168.43.33'
  port = '3000'
  headers
  changeInHeader = new BehaviorSubject<any>(null)
  constructor(private httpclient: HttpClient) {
    // this.changeInHeader.subscribe(this.getToken)
  }
  getToken = () => {

    const token = localStorage.getItem('token')
    return this.headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
  }

  post(apipath, payload) {
    const BaseUrl = `${this.url}:${this.port}/${apipath}`
    return this.httpclient.post(BaseUrl, payload, { headers: this.getToken() })
  }
  get(apipath) {
    const BaseUrl = `${this.url}:${this.port}/${apipath}`
    return this.httpclient.get(BaseUrl, { headers: this.getToken() })
  }
  patch(apipath, payload) {
    const BaseUrl = `${this.url}:${this.port}/${apipath}`
    return this.httpclient.patch(BaseUrl, payload)
  }
  delete(apipath) {
    const BaseUrl = `${this.url}:${this.port}/${apipath}`
    return this.httpclient.delete(BaseUrl)
  }
}
