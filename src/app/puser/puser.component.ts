import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puser',
  templateUrl: './puser.component.html',
  styleUrls: ['./puser.component.css']
})
export class PuserComponent implements OnInit {

  constructor() {
    console.log(localStorage.getItem("id"))
   }
id:any
  ngOnInit(): void {
  }

}
