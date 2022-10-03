import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Task list';
  tasklist:string[]=[];

   ngOnInit() {
      if(localStorage.getItem('my_task')){
        this.tasklist =JSON.parse(localStorage.getItem('my_task')!);
      }
  }
 


}
