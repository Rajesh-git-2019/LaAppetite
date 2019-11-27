import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  resId : number;
  menus=[{id:1,name:'Mc.Donalds',list:['Jr.Chicken','Poutine','Hot Coffee','coke'],img:'../assets/images/mcdonalds.png'},
  {id:2,name:'BurgerKing',list:['jr.ch','coke'],img:'../assets/images/BK.jpg'},
  {id:3,name:'Starbucks',list:['jr.ch','coke'],img:'../assets/images/starbucks.jpg'}];
  menu :any; 
  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.resId =Number( this.route.snapshot.params['i']);
    this.getMenu();
  }

  getMenu(){
          for(let x of this.menus)
          {
            if(x.id==this.resId)
            {
                this.menu = x;
            }
          }      
    }
  }

