import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @ViewChild("todo") todoRef ! : ElementRef;
  @Output() todoEmitter : EventEmitter <string> = new EventEmitter<string>()
  constructor() {}
 
  ngOnInit(): void {
  }
  addSkill(){
    let ref =this.todoRef.nativeElement;
    if(ref.value){
      console.log(ref.value);
      this.todoEmitter.emit(ref.value);
      ref.value='';
    }
  }

}
