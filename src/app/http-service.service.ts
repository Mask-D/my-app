import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  constructor(private http: HttpClient) { }


  getData() {
    const myHeaders = new HttpHeaders().set('Authorization', 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTQ2NzY0NTI1LCJlbWFpbCI6IiJ9.3mGUY51Ckvf_0Rnckt9SaLq_K3WAq0dFEo2mDUjp5_o');
    return this.http.get('http://gpdd.ddns.net:8300/profiles/all/', {headers:myHeaders});
  }

  getProjects() {
    const myHeaders = new HttpHeaders().set('Authorization', 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTQ2NzY0NTI1LCJlbWFpbCI6IiJ9.3mGUY51Ckvf_0Rnckt9SaLq_K3WAq0dFEo2mDUjp5_o');
    return this.http.get('http://gpdd.ddns.net:8300/gpdprojects/', {headers:myHeaders});
  }

getRoles() {
  const myHeaders = new HttpHeaders().set('Authorization', 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTQ2NzY0NTI1LCJlbWFpbCI6IiJ9.3mGUY51Ckvf_0Rnckt9SaLq_K3WAq0dFEo2mDUjp5_o');
    return this.http.post('http://gpdd.ddns.net:8300/roles/all/', '',{headers:myHeaders});
}
  /*getUser() {

    const myUrl = '/assets/users.json';
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let myData = [];
    this.http.post(myUrl, {name: "Bob"}, {headers: myHeaders, observe: 'body', responseType: 'json'})
    .subscribe({next: data => console.log('Server requested: ' , myData.push(data)), error: err => console.error('Error: ' + err), complete: () => console.log('Complete'),});
    return myData;
  }*/
}
