import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  total : number = 0 ;
  checkOutList : any;
  constructor(private router : Router, private route : ActivatedRoute) {
    this.checkOutList =(this.router.getCurrentNavigation().extras.state.example);
    
   }

  ngOnInit() {
    this.getTotalAmount();
  }
  getTotalAmount(){
      for(let item of this.checkOutList)
      {
          this.total = this.total + Number(item.price);
      }
      console.log(this.total);
  }

  payNow()
  {
    alert("Order Placed Successfully!!!")
    this.router.navigate(['../restaurants']);
  }

}
