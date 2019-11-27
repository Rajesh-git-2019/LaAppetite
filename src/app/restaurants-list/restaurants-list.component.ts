import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {
faU = faUser;
restaurants = [{ id:1,name:'Mc.Donalds',img:'../assets/images/mcdonalds.png',rating:'*****',status:'Open'},
{id:2,name:'Burger King',img:'../assets/images/BK.jpg',rating:'****',status:'Open'},
{id:3,name:'Star Bucks',img:'../assets/images/starbucks.jpg', rating:'*****',status:'Closed'}
              ]
  constructor() { }

  ngOnInit() {
  }

}
