import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
;

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  url:string="http://localhost:7878/api/product";
 // url:string="http://localhost:8080/Employee";

  constructor(private httpClient: HttpClient) { }


  getData(): Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(this.url);
  }




  e:Employee={
    id: 0,
    name: '',
    uname: '',
    password: ''
  }

 
deleteData(id:number)
{
  //http://localhost:3000/Employee/3
  return this.httpClient.delete(this.url+id);
}

postData(emp:Employee)
{
  //http://localhost:3000/Employee/   empl object
  return this.httpClient.post(this.url,emp);
}


  updateData(emp:Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(this.url+emp.id,emp);
    // localhost:3000/Employee/2  emp PUT
  }
  
  
}
