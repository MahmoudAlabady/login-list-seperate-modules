import { Component, OnInit,OnDestroy } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit,OnDestroy {

  constructor(private userService:UserServiceService) { }
  getLoginStatus(){
    return this.userService.getLoginFlag();
    
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.userService.setLoginFlag("","");
    console.log('login Screen Destroyed')
  }

}
