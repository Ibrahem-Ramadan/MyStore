import { Component, OnInit ,Input} from '@angular/core';
import { CartItem } from 'src/app/Models/CartItem';
import { CartManagementService } from 'src/app/services/cart-management.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem : any;
  quantity:any;
  constructor(private cartService:CartManagementService) { }

  ngOnInit(): void {
    this.quantity=this.cartItem.quantity;
  }

  upadateQantity(){
    let index = this.cartService.cartItems.findIndex(item=>item.product.id==this.cartItem.product.id);
    this.cartService.cartItems[index].quantity=this.quantity;
  }
  deleteItem(item:CartItem){
    this.cartService.deleteCartItem(item);
  }
}
