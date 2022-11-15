import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';
const options={
  headers:new HttpHeaders
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // acno13:any=localStorage.getItem('accound')
  // a:any=this.db.database[this.acno13]['username']
  // uname13:any=this.db.database[this.acno13]['password']
  // acno13:any
  // a:any
  // uname13:any
  // bal1:any
  // bal2:any
  deleteac:any
  depositform=this.fb.group({
    acno13:[""],
    // a:[""],
    uname13:[""],
    bal1:[""],
  })
  withdrowform=this.fb.group({
    acno13:[""],
    // a:[""],
    uname13:[""],
    bal2:[""],
  })
 
  deleteaccount:any
  
    constructor(private router:Router,private db:DatabaseService,private fb:FormBuilder,private http:HttpClient) { }
  
    ngOnInit(): void {
      // if(!localStorage.getItem('ac')){
      //   alert('login again')
      //   this.router.navigateByUrl('')
      // }
    }
  deposit(){
    // var username:any=this.depositform.value.a
    var password:any=this.depositform.value.uname13
    var accoundnumber:any=this.depositform.value.acno13
    var balance1:any=this.depositform.value.bal1
    const data={
accoundnumber:accoundnumber,
password:password,
balance:balance1
    }
    return this.http.post('http://localhost:4003/deposit',data,this.getOptions()).subscribe((result:any)=>{
if(result){
  this.router.navigateByUrl('history')
  alert(result.message)
 
}
    },(result)=>{
      alert(result.error.message)
    })
    // let data=this.db.database
    // if(accoundnumber in data){
    //   if(password == data[accoundnumber]['password']){
    //     data[accoundnumber]['balance']=Number( data[accoundnumber]['balance'])+Number(balance1)
    //     console.log(data)
        // localStorage.setItem('account1',this.acno13)
  
        // this.router.navigateByUrl('history')
      
    }
    getOptions(){
      var token=JSON.parse(localStorage.getItem('token')||'')
      console.log("token",token)
      let headers= new HttpHeaders()
      if(token){
        headers =headers.append('x-access-token',token)
        console.log("headers",Headers)
        options.headers=headers
      }
      return options
    }
  
  

withdrow(){
  // var username:any=this.withdrowform.value.a
  var password:any=this.withdrowform.value.uname13
  var accoundnumber:any=this.withdrowform.value.acno13
  var balance2:any=this.withdrowform.value.bal2
  const data={
    accoundnumber:accoundnumber,
    password:password,
    balance:balance2
        }
        return this.http.post('http://localhost:4003/withdrow',data,this.getOptions()).subscribe((result:any)=>{
    if(result){
      alert(result.message)
      this.router.navigateByUrl('history')
    }
        },(result)=>{
          alert(result.error.message)
        })
  // let data=this.db.database
  // if(accoundnumber in data){
  //   if(password == data[accoundnumber]['password']){
  //     data[accoundnumber]['balance']=Number( data[accoundnumber]['balance'])-Number(balance2)
  //     console.log(data)
      // localStorage.setItem('account1',this.acno13)
      // this.router.navigateByUrl('history')
    }
  

butt(){
  localStorage.removeItem('ac')
  
  this.router.navigateByUrl('login') 
}
// delet(){
// this.deleteac=localStorage.getItem('ac')
// console.log(this.deleteac)
// }
deletebutton(){
this.deleteaccount=JSON.stringify(localStorage.getItem('ac'))
console.log(this.deleteaccount)
}
cancel(){
  this.deleteaccount=''
}
delete(Event:any){
alert("deleted seccess")

}
}