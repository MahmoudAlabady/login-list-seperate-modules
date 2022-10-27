import { Component, OnInit,OnDestroy } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-welcome-widget',
  templateUrl: './welcome-widget.component.html',
  styleUrls: ['./welcome-widget.component.css']
})
export class WelcomeWidgetComponent implements OnInit,OnDestroy {
 

  constructor(private userService:UserServiceService) { }
  getUserName(){
    return this.userService.getUserFlag();
     
    
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    console.log('welcome widget Destroyed')
}
}
