import { Component, OnInit } from '@angular/core';
import {UserService}  from '../user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  constructor(private user:UserService,private fb:FormBuilder,public router :Router) { }

  loginForm!:FormGroup;
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      id:[''],
      pass:['']
    })
  }

  userdata:any;
  emppass:any; 
  login()
  {
    this.user.getuser(this.loginForm.value.id).subscribe(data=>{
      this.userdata=data;
      this.emppass=this.userdata.msg[0].basicdetails.emppassword;
     
      if(this.emppass==this.loginForm.value.pass)
      {
        localStorage.setItem("id",this.loginForm.value.id);
      this.router.navigateByUrl('/epanel');
      }
     
    })
    
  }
}
