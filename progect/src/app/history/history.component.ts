import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
dummyarray:any=[]
array:any
date:any
currentDateTime:any
name:any
accoundnumber:any
balance:any

  constructor(private router:Router,private db:DatabaseService,private http:HttpClient) { 
    console.log(this.currentDateTime);
    // ,public datepipe:DatePipe
  }

  ngOnInit(): void {
    // this.name=JSON.parse(localStorage.getItem('username')||'')
    // this.accoundnumber=JSON.parse(localStorage.getItem('currentaccoundnumber')||'')
    var accoundnumber=JSON.parse(localStorage.getItem('currentaccoundnumber')||'')
    this.http.get('http://localhost:4003/depositb/'+accoundnumber).subscribe((result:any)=>{
      if(result){
        this.dummyarray.push(result)
        console.log(this.dummyarray)
        this.array=(result.transaction)
        console.log(this.array)
      }

    })
    this.date=new Date()
  }

}
