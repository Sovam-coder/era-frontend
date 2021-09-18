import { Component, OnInit } from '@angular/core';
import {UserService}  from '../user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-cnewuser',
  templateUrl: './cnewuser.component.html',
  styleUrls: ['./cnewuser.component.css']
})
export class CnewuserComponent implements OnInit {

  constructor(private create:UserService,private fb: FormBuilder) { }
  createUserForm!: FormGroup;
  addPreviousOrgform!: FormGroup;
  ngOnInit(): void {
    this.createUserForm = this.fb.group({
      name:[''],
      address:[''],
      mobile:[''],
      empid:[''],
      emppassword:[''],
      emailid:[''],
      basicpay:[''],
      lastupdated:[''],
      tax:[''],
      bonus:[''],
      totalpay:[''],
      statusofleave:[''],
      dateofapply:[''],
      attendance:['']

    });

    this.addPreviousOrgform = this.fb.group({ 

    })

  }

    createUser(){
      this.create.createuserEMS(this.imagebuffer,this.createUserForm.value.name,this.createUserForm.value.address,this.createUserForm.value.mobile,this.createUserForm.value.empid,this.createUserForm.value.emppassword,this.createUserForm.value.emailid,this.createUserForm.value.basicpay,this.createUserForm.value.lastupdated,this.createUserForm.value.tax,this.createUserForm.value.bonus,this.createUserForm.value.totalpay,this.createUserForm.value.statusofleave,this.createUserForm.value.dateofapply,this.createUserForm.value.attendance).subscribe((data: any)=>{
       
       console.log("hiii");
       alert("User Created");
      })
     }


     imagebuffer:any

     fileSelected(even:any){
      // console.log(this.selectedfile);
     var reader= new FileReader();
       reader.readAsDataURL(even.target.files[0])
       reader.onload = (even:any)=>{
        this.imagebuffer= even.target.result;
        
       // this.base64result = event.target.result.split('/')[1];
       }
      
   }
//  onuploadDoc(){
//        this.hero.addPreviousorgDoc('operator',this.previousdocId,this.imagebuffer).subscribe(data=>{
//                this.data=data;
//                console.log(data);        
//              })
//    }
  

}
