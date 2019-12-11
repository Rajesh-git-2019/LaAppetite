import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validator, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {MustMatch} from '../helpers/must-match.validator'
import {UsersService} from '../service/users.service'
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(public fb : FormBuilder, private userService : UsersService, private router : Router, public dialogRef : MatDialogRef<AccountSettingsComponent>) { }

  public passwordForm = this.fb.group({
    newPassword : ['',Validators.required],
    confirmPassword :['',Validators.required]
  },
  {
    validator: MustMatch('newPassword', 'confirmPassword')
})
  
  ngOnInit() {
  }
  resetPassword(){
      for(let user of this.userService.users)
      {
        if(sessionStorage.email == user.email){
          user.password=this.passwordForm.value.newPassword;

        }
      
    }
    sessionStorage.clear();
    this.router.navigate(['/']);
    this.dialogRef.close();


  }

}
