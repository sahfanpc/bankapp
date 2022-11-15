import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {
  testbutton:boolean=false
// name:any
// password:any
// accountnumber:any
// adhar:any
// balance:any
creditform=this.fb.group({
  name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
password:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
accountnumber:['',[Validators.required]],
adhar:['',[Validators.required]],
balance:['',[Validators.required]]
})

database:any={}
array:any=[]

  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
submit(){
this.testbutton=true
  // console.log(this.name)
 var name1:any=this.creditform.value.name
 var password1:any=this.creditform.value.password
 var accountnumber1:any=this.creditform.value.accountnumber
 var adhar1:any=this.creditform.value.adhar
 var balance1:any=this.creditform.value.balance
 if(name1 =='' || password1 =='' || accountnumber1 ==''|| adhar1==''||balance1==''){
  alert("please fill")
 }else{
 
 if(this.creditform.valid){

this.database={
  name1:name1,
  psd:password1,
  acno:accountnumber1,
  adar:adhar1,
  blc:balance1
}
// console.log(this.database)
this.array.push(this.database)
console.log(this.array)

}else{
  alert("username and password are only characters")
}
}
}
}