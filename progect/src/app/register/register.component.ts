import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { bindCallback } from 'rxjs';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {
  // acno1:any
  // psd1:any
  // uname1:any
registerform=this.fb.group({
  acno1:['',[Validators.required]],
  psd1:['',[Validators.required]],
  uname1:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
})

  constructor(private router:Router,private db:DatabaseService,private fb:FormBuilder,) { }

  ngOnInit(): void {
  }
  register(){
    var name:any=this.registerform.value.uname1
    var psd:any=this.registerform.value.psd1
    var acno:any=this.registerform.value.acno1


    if(name ==''||psd ==''||acno ==''){
      alert("please fill")
    }else{
    if(this.registerform.valid){
this.db.Register(acno,psd,name)
.subscribe((result:any )=>{
if(result){
  alert(result.message)
  this.router.navigateByUrl('login')
 }
},(result)=>{
    alert(result.error.message)
})
 }else{
  alert("user name only character required")
}
}
  }
}