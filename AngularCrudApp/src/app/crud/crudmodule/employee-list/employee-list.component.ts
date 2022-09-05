import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public cs:CommonService) { }

  emplist:Employee[];
  uname:any;
  p:number=1;
  total:number=2;
  ngOnInit(): void {
   
    this.cs.getData().subscribe(data=>{
      this.emplist = data;
      
    });

}

deleteData(id:number){
  this.cs.deleteData(id).subscribe();
  window.location.reload();
}

editData(emp:Employee){
   this.cs.e = Object.assign({},emp);
}

search(){
  
if(this.uname==''){
  this.ngOnInit();
}
else{
  this.emplist=this.emplist.filter(d=>{
return d.uname.toLocaleLowerCase().match(this.uname.toLocaleLowerCase());
  });
}
}



key:string='';
reverse:boolean=false;
sort(key){
alert(key);
alert(this.reverse);
this.key=key;
this.reverse=!this.reverse;
alert(this.reverse);
}
}