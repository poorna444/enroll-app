import { EnrollService } from './../enroll.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-enroll-details',
  templateUrl: './enroll-details.component.html',
  styleUrls: ['./enroll-details.component.css']
})
export class EnrollDetailsComponent implements OnInit {

  user: User = {id:'',name:'',dateOfBirth:'',active:false};

  constructor(private route: ActivatedRoute, private enrollService: EnrollService) {
    this.user = {id:'',name:'',dateOfBirth:'',active:false};
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
     this.enrollService.getEnrollDetails(params["id"]).subscribe((data: User) => {
       this.user = data;
     });
    });
  }

  submitEdit(){
    
    
    this.enrollService.editEnrollDetails(this.user).subscribe(res =>{
      alert("Successfully Updtaed");
        
    },err =>{
      alert("Getting exception  : "+err.error + " \n But I sent data like below \n \n"+JSON.stringify(this.user) +"  \n \n This is backend service problem");
      
    });
  }

}
