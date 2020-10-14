import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  URL = 'http://localhost:8081/';
  header = new HttpHeaders().append('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  public getAllEnrolls(){
    return this.http.get(this.URL + 'enrollees');
  }

  public getEnrollDetails(id: string){
    return this.http.get(this.URL + 'enrollees/'+id);
  }

  public editEnrollDetails(user: User){

    console.log('inside edit user');
    
    let body = {
      "active": user.active,
      "name": user.name,
      "dateOfBirth": user.dateOfBirth
    }
    alert("I am sending all the details name,dob,active \n \n "+JSON.stringify(body));
    
    return this.http.put(this.URL + 'enrollees/'+user.id, { body: body, headers: this.header });
  }

}
