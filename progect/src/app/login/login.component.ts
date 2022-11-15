import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // acno2:any
  // psd2:any
  loginform=this.fb.group({
    acno2:['',[Validators.required]],
  psd2:['',[Validators.required]]
  })

  constructor(private router:Router,private db:DatabaseService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
login(){
  var acno:any=this.loginform.value.acno2
  var psd:any=this.loginform.value.psd2
  // let data=this.db
  if(acno ==''||psd==''){
    alert("please fill")
  }else{
  if(this.loginform.valid){
this.db.Login(acno,psd)
  .subscribe((result:any)=>{
if(result){
  alert(result.message)
  localStorage.setItem("currentaccno",JSON.stringify(acno))
  localStorage.setItem("currentaccoundnumber",JSON.stringify(result.currentaccoundnumber))
  localStorage.setItem("username",JSON.stringify(result.username))
  localStorage.setItem("balance",JSON.stringify(result.balance))
  localStorage.setItem("password",JSON.stringify(result.password))
  localStorage.setItem("token",JSON.stringify(result.token))

  
  
  this.router.navigateByUrl('dashboard')
}
  },(result)=>{
    alert(result.error.message)
  })

//   const result=data.Login(acno,psd)
//   if(result){
//     alert("login seccessfully")
    // localStorage.setItem('accound',acno)
  
//     this.router.navigateByUrl('dashboard')
//   }else{
// alert('login failed')
//   }
}
}
}
}