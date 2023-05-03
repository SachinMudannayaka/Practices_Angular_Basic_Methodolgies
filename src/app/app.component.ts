import { Component ,ViewChild,AfterViewInit} from '@angular/core';
import { PostComponent } from './post/post.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  stringInterpolation:string="String Interpolation was called";
  title = 'angIntro';
  parentMessage:string ="Hi there I'm from Parent(app.component)";
  message!:string;
  fromChildOutput!:string;
  imageUrl='https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg';
  bool:boolean=false;
  usersName!:string;
  someTXTVal:string="Value is coming from component";


  @ViewChild(PostComponent) childPostComp!:PostComponent;
constructor(){
  console.log(this.childPostComp);
}
ngAfterViewInit():void {
    console.log(this.childPostComp);
    this.message=this.childPostComp.childMessage;
}
recieveMsg($event:any){
this.fromChildOutput=$event;
}
buttonClick(){
console.log("button Click method Work!!!");
}
onKeyUp(){
console.log(this.someTXTVal);

}
}
