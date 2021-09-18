import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getAllStudents(){
    return this.http.get('https://ems-erabackend.herokuapp.com/read');
  }
  createuserEMS(photo:any,name: any, address:any,
  mobile:any,
  empid:any,
  emppassword:any,
  emailid:any,
  basicpay:any,
  lastupdated:any,
  tax:any,
  bonus:any,
  totalpay:any,
  statusofleave:any,
  dateofapply:any,
  attendance:any)
  {
      var  options = {
        // basicdetails:{
        //     name:name,
        //     empid:"12345"
        //   }
      basicdetails:{
        photo:photo,
          name:name,
          address:address,
          mobile:mobile,
          empid:empid,
          emppassword:emppassword,
          emailid:emailid
        },
        payrollsection:{
        basicpay:basicpay,
        lastupdated:lastupdated,
        tax:tax,
        bonus:bonus,
        totalpay:totalpay
        },
      leavemanagement:{
      statusofleave:statusofleave,
      dateofapply:dateofapply
    },
      attendance:attendance
    }
    
    
      console.log(options);
       return this.http.post('https://ems-erabackend.herokuapp.com/create',options);
     }

     getuser(empid:any)
     {
       
      return this.http.post('https://ems-erabackend.herokuapp.com/getuserdetails',empid);
     }
    //  updateuser(photo:any)
    //  {
    //    var options={
    //      basicdetails:{
    //        photo:photo
    //      }
    //    }

    //    return this.http.put("https://ems-erabackend.herokuapp.com/update",options)
    //  }
}
