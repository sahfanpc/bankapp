import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete1',
  templateUrl: './delete1.component.html',
  styleUrls: ['./delete1.component.css']
})
export class Delete1Component implements OnInit {
@Input()item:string|undefined
@Output()onCancel=new EventEmitter()
@Output()onDelete=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
delete(){
this.onDelete.emit(this.item)
}
cancel(){
this.onCancel.emit()
}
}
