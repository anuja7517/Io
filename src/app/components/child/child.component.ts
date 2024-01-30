import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
 @Input() getMsgFromParent !:string;
 msg : string =`yes I will work hard !!!`
 //sendMsgToParent :EventEmitter
 @Output() sendMsgToParent: EventEmitter<string> = new EventEmitter<string>();  //type EventEmitter (class)
  constructor() { }

  ngOnInit(): void {
  //  this.sendMsgToParent.emit(this.msg)
  }
  sendMsg(){
    this.sendMsgToParent.emit(this.msg)
  }

}// input -child receive form parent 
//output chlid event sand -- receive function 
