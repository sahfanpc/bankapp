import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  database:any={
    1000:{accountnumber:1000,password:1000,username:'sahfan',balance:0}

    }
 

  constructor(private router:Router,private http:HttpClient) { }
  Register(accoundnumber:any,password:any,username:any){
    const data={
      accoundnumber,
      password,
      username,
      balance:0
    }
    return this.http.post('http://localhost:4003/register',data)
  // Register(acno1:any,psd1:any,uname:any){
  //         if(acno1 in this.database){
  //       return false
  //       }else{
  //         this.database[acno1]={
  //           accountnumber:acno1,
  //           password:psd1,
  //           username:uname,
  //           balance:0
  //         }
          // localStorage.setItem('ac',acno1)
  //         return true
          // localStorage.setItem('datab',JSON.stringify(this.database))
        }
  
        Login(accoundnumber:any,password:any){
        const data={
          accoundnumber,
          password
        }   
        return this.http.post('http://localhost:4003/login',data)
         
      }
      
//   Login(acno2:any,psd2:any){
//     if(acno2 !='' && psd2 !=''){
//       if(acno2 in this.database){
//         if(psd2 == this.database[acno2]['password']){
//           localStorage.setItem('ac',acno2)
//         return true
//         // localStorage.setItem('datab',JSON.stringify(this.database))
//       }else{
//         return false
//       }
//     }else{
      
//       return false
//     }
//     }else{
//       return false
//   }
// }
datastore(){
  localStorage.setItem('datab',JSON.stringify(this.database))
}
}
