import { Component, OnInit,OnDestroy } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-list-widget',
  templateUrl: './list-widget.component.html',
  styleUrls: ['./list-widget.component.css']
})
export class ListWidgetComponent implements OnInit,OnDestroy {

  constructor(private userService:UserServiceService) { }
  showUser(event: any){
    if(event){
      this.userService.setLoginFlag("alabady@yahoo.com","123456");
      
    }
    
    console.log(event)
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    console.log('list Widget Destroyed')
}

}
