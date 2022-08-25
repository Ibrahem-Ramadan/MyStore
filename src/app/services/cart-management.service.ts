import { Injectable } from '@angular/core';
import { CartItem } from '../Models/CartItem';
@Injectable({
  providedIn: 'root'
})
export class CartManagementService {

  constructor() { }

  cartItems:CartItem[]=[];

  getCartList() :CartItem[]{
    return this.cartItems ;
  }

  addToCartList(cartItem:CartItem):CartItem[]{

    if(this.cartItems.find(item => item.product.id === cartItem.product.id) === undefined)
    {
      this.cartItems.push(cartItem);
      alert(`New Item Added To Cart`)
    }
    else{
      alert('item already added before')
    }

    return this.cartItems;
  }

  deleteCartItem(cartItem:CartItem):CartItem[]{
    let index = this.cartItems.findIndex(item=>item.product.id == cartItem.product.id)
    this.cartItems.splice(index,1);
    return this.cartItems
  }
 
}
