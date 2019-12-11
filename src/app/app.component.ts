import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {MatDialog} from '@angular/material';
import {AccountSettingsComponent} from '../app/account-settings/account-settings.component'

import { faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'LaAppetite';
  userIcon = faUser;
  name = '';
  constructor(private router :Router, private dialog :MatDialog){
     
  }
  ngOnInit(){
    if(sessionStorage.session){
      this.name = sessionStorage.name;
    }

  }

  logOut(){
    console.log("logout");
    sessionStorage.clear();
    this.name='';
    this.router.navigate(['/']);
  }

  passwordReset(){
    if(sessionStorage.session){
      this.dialog.open(AccountSettingsComponent);
    };
    
  }

}
