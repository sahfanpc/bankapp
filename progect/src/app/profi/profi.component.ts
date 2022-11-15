import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-profi',
  templateUrl: './profi.component.html',
  styleUrls: ['./profi.component.css']
})
export class ProfiComponent implements OnInit {
  
  accoundnumber11:any
  adhar:any
  name:any
  password11:any

  constructor(private router:Router,private db:DatabaseService) { }


  ngOnInit(): void {
   this.accoundnumber11=JSON.parse(localStorage.getItem('currentaccoundnumber')||'')
    this.name=JSON.parse(localStorage.getItem('username')||'')
    this.password11=JSON.parse(localStorage.getItem('password')||'')
    this.adhar=JSON.parse(localStorage.getItem('balance')||'')
  }

}
