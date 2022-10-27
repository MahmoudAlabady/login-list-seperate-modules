import { Injectable } from '@angular/core';
import { OnDestroy } from '@angular/core';

@Injectable({
   providedIn: 'root'
  // providedIn: 'any'
})
export class UserServiceService implements OnDestroy {
loggedInFlag=false;
userName =""
setLoginFlag(email:string,password:string){
  if(email=="alabady@yahoo.com" && password=='123456'){
    this.loggedInFlag = true;
    this.userName = email;
    console.log(this.userName)
  }
  else{
    this.loggedInFlag = false;
  }
  
 }

 getLoginFlag(){
  return this.loggedInFlag
 }
 getUserFlag(){
  return this.userName
 }
  constructor() { }
  ngOnDestroy(): void {
    console.log('user service Destroyed')
}
}
