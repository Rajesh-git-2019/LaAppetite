import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { NgForm } from "@angular/forms";
import {menuItemService} from "../service/menuItems.service"
import { Key } from 'protractor';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  
  @ViewChild('f',{static: false}) checkboxForm : NgForm;
  resId : number;
  rs:any;
  menu :any; 
  selectedMenu = [];

 
  constructor(private route: ActivatedRoute, private menuItemservice : menuItemService, private router : Router) { 
    
  }

  ngOnInit() {
    this.resId =Number( this.route.snapshot.params['i']);
    this.getMenu();
  }

  getMenu(){
          for(let x of this.menuItemservice.menuItems)
          {
            if(x.id==this.resId)
            {
                this.menu = x;
            }
          }      
    }
    orderNow()
    {
      
     for (const item in this.checkboxForm.value.menuItems){
      const selected = this.checkboxForm.value.menuItems[item];
       if(selected){

        this.selectedMenu.push(this.menu.list.find(x=>x.itemId==Number(item)))     }
       
     }
     
     this.router.navigate(['/order'], { state: {example: this.selectedMenu } });    }
  }

