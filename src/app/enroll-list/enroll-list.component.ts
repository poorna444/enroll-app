import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-enroll-list',
  templateUrl: './enroll-list.component.html',
  styleUrls: ['./enroll-list.component.css']
})
export class EnrollListComponent implements OnInit {
  enrolls: User[] = [];
  constructor(private enrollService: EnrollService) { }

  ngOnInit(): void {
    this.enrollService.getAllEnrolls().subscribe((data: any) => {
      this.enrolls = data;
    });
  }

}
