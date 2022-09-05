import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';


import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public cs:CommonService) { }

  ngOnInit(): void {
  }

  submitData(emp:Employee){
      console.log(emp.name);
    
    if(emp.id>0){
        this.cs.updateData(emp).subscribe();
    }else{
      this.cs.postData(emp).subscribe();
    }
    window.location.reload();
    }
    

  resetData(){
     this.cs.e = Object.assign({},null);
  }




}
