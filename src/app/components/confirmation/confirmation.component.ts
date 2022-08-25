import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/Models/CartItem';
import { OrderConfirmationService } from 'src/app/services/order-confirmation.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  validFormData:any;
  orderItems:any;
  date :any
  total:any=0;
  constructor(private order:OrderConfirmationService) { }

  ngOnInit(): void {

    this.validFormData = this.order.formData ;
    this.orderItems= this.order.CartItems as CartItem[];
    this.date=new Date();
    for (let index = 0; index < this.orderItems.length; index++) {
      this.total += (this.orderItems[index].product.price * this.orderItems[index].quantity);
      
    }
  }

}
