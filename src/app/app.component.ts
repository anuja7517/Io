import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from './model/std';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{ 
  title = 'Io';
  msgFromParent : string =`Work hard and party hard !!!`
  msgFromChild ! :string;   // ui show
  skillsArray : Array<string> = ["HTML 5","CSS 3"];
 


  studentsArr : Array<Istd> =[{
    fname : "madu",
    lname : 'bhosle',
    email : 'bhosle@madu.com',
    contact : 1478523690
  }]

@ViewChild("todo") todoref!: ElementRef  
  constructor(){

  }
  ngOnInit(): void {
    
  }
  // addSkill(){
  //   console.log(this.todoref.nativeElement.value);
  //   if(this.todoref.nativeElement.value){
  //     this.skillsArray.push(this.todoref.nativeElement.values)
  //   }
  //  }
  // // addSkill(ele:HTMLInputElement){
  // //   if(ele.value){
  // //     console.log(ele.value);
  // //     this.skillsArray.push(ele.value);
  // //     ele.value=''
  // //   }
  // // }
  getMsgFromChild(msg:string){
    console.log(msg)
    this.msgFromChild = msg;  
  }

  addSkillSet(skill: string){
  console.log(skill);
   this.skillsArray.push(skill)
}

// onAddStudent(fname:HTMLInputElement,lname:HTMLInputElement,email:HTMLInputElement,contact:HTMLInputElement){
// if(fname.value  && lname.value && email.value && contact.value ){
//   let obj :Istd= {
//     fname:fname.value,
//     lname:lname.value ,
//     email:email.value ,
//     contact: +contact.value
//   }
//   console.log(obj);
//   this.studentsArr.push(obj)
//   fname.value = ''
//   lname.value = ''
//   email.value = ''
//   contact.value = ''
// }

// }
getStdData(stdObj : Istd){
  console.log(stdObj);
  this.studentsArr.push(stdObj)
  
}

}

