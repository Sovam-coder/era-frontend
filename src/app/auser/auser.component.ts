import { Component, OnInit } from '@angular/core';
import {UserService}  from '../user.service';
@Component({
  selector: 'app-auser',
  templateUrl: './auser.component.html',
  styleUrls: ['./auser.component.css']
})
export class AuserComponent implements OnInit {
  getAlluser: any;
  getuser:any;
  constructor(private user:UserService) { 
    this.user.getAllStudents().subscribe(data=>{
      this.getAlluser = data;
      this.getuser=this.getAlluser.msg;
    })
  }

  ngOnInit(): void {
  }


}
