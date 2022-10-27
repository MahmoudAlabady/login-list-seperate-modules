import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-list-screen',
  templateUrl: './list-screen.component.html',
  styleUrls: ['./list-screen.component.css']
})
export class ListScreenComponent implements OnInit,OnDestroy {

  constructor(private userService:UserServiceService) { }
  getLoginStatus(){
    return this.userService.getLoginFlag();
    
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    console.log('list Screen Destroyed')
}
}
