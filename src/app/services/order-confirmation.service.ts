import { Injectable } from '@angular/core';
import { CartManagementService } from './cart-management.service';

@Injectable({
  providedIn: 'root'
})
export class OrderConfirmationService {

  formData:any
  CartItems:any
  constructor(private cartService:CartManagementService) { }

  setOrder(formData:any){
    this.formData = formData;
    this.CartItems= this.cartService.cartItems;
  }

}
