import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UserService}  from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  

  constructor(public router :Router,public user:UserService) { 
    
 
    
  }

  ngOnInit(): void { 
  }
  currentval="";
  p="";
  emppass="";
  userdata:any;
  getVal(val: string,val1: string)
  {
    //console.warn(val)
    //console.warn(val1)
    //this.currentval=val
    //this.currentval1=val1
    if(val=="admin" && val1=="era")
    {
      this.router.navigateByUrl('/admin');
    }
    else{
      this.router.navigateByUrl('/');
      this.currentval="Invalid Email or Password";
      this.p="danger";
      
    }

  }
  
  }


  
  
  
  // getVal(val: string,val1: string)
  // {
  //   console.log(val,val1);
  //   this.user.getuser(val).subscribe(data=>{
  //     this.userdata=data;
  //    this.emppass=this.userdata.msg[0].basicdetails.emppassword;
  //    console.log(this.emppass);
    
  //    if(this.emppass==val1)
  //  {
  //   this.router.navigateByUrl('/auser');
  //   console.log("Login succesfuuly user")
  //   console.log(this.userdata)
  //  }
    // })
    //console.warn(val)
    //console.warn(val1)
    //this.currentval=val
    //this.currentval1=val1

    // if(val=="admin" && val1=="era121")
    // {
    //   this.router.navigateByUrl('/admin');
    // }
    
    // else{
    //   this.router.navigateByUrl('/');
    //   this.currentval="Invalid Email or Password";
    //   this.p="danger";
    // }

//   }



