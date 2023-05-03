import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  msgFromPostC:string='Hi there from Post...';

  title:string ="List Of Posts";
  childMessage:string="From Child Component";
  outPutChildMsg:string='Message  from child Component Via Output';

  @Input() fromParent!:string;

  @Output() messageEvent=new EventEmitter<string>();

  msgFromPostCom:string="This msg From Post-Component/Ado Wade HARI";

  constructor(){}
ngOnInit(): void {

}

sendMessage(){
this.messageEvent.emit(this.outPutChildMsg);
}
}
