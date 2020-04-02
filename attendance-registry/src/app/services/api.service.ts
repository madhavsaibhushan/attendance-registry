import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://192.168.43.33'
  port = '3000'
  headers
  constructor(private httpclient: HttpClient) {
    const token = localStorage.getItem('token')
    console.log(token,'header')
    this.headers = new HttpHeaders({
      'Authenticate': token
    })
  }


  post(apipath, payload) {
    const BaseUrl = `${this.url}:${this.port}/${apipath}`
    return this.httpclient.post(BaseUrl, payload,{headers:this.headers})
  }
  get(apipath) {
    const BaseUrl = `${this.url}:${this.port}/${apipath}`
    return this.httpclient.get(BaseUrl,{headers:this.headers})
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
