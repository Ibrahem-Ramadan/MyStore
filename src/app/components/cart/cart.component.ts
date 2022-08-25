import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/Models/CartItem';
import { CartManagementService } from 'src/app/services/cart-management.service';
import {  Validators, FormGroup, FormBuilder} from '@angular/forms'
import { OrderConfirmationService } from 'src/app/services/order-confirmation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  myCartItems:CartItem[]=[];
  formGroup:any ;
  formSubmitted=false;
  constructor(private router: Router , private cartService : CartManagementService , private formBuilder:FormBuilder ,private order:OrderConfirmationService) { }

  ngOnInit(): void {
    this.myCartItems= this.cartService.getCartList() as CartItem[];

    this.formGroup = this.formBuilder.group({
      fullname:['',[Validators.required,Validators.minLength(6)]],
      address:['',[Validators.required]],
      cardNumber:['',[Validators.pattern("\\d{16}"),Validators.required]],
      email:['',[Validators.required,Validators.email]]
    }) as FormGroup
  }

  getTotal():number{
    let total = 0;
    for (let index = 0; index < this.myCartItems.length; index++) {
      total+= (this.myCartItems[index].product.price * this.myCartItems[index].quantity)

    }
    return total;
  }

  isEmptyCart():boolean{
    return this.myCartItems.length == 0
  }

  get formControls() {
    return this.formGroup.controls;
  }
  onSubmit(){
    this.formSubmitted = true;
    if(this.formGroup.valid){
      this.order.setOrder(this.formGroup.value)
      this.router.navigate(['cart/confirmation']);
    }
  }
}
