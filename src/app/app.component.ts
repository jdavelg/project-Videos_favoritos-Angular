import { Component, OnInit, DoCheck } from '@angular/core';
import {routing, appRoutingProviders  } from "./app-routing.module";
import { UserService } from './services/user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit{
  title = 'videos-angular';

  public identity:any;
  public token:any;

  constructor(
    private _userService:UserService){
    
  }

  ngOnInit(): void {
this.loadUser();
    
  }

ngDoCheck(): void {
this.loadUser();
  
}

  loadUser(){
    this.identity= this._userService.getIdentity();
    this.token=this._userService.getToken();
  }



}
