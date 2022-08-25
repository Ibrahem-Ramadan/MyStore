import { Component, OnInit, Input ,Output,EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/Models/CartItem';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor() { }

  @Input () product:any;
  @Output() cartItemAdded = new EventEmitter()
  quantity:number=1;
  cartItem:any;

  ngOnInit(): void {
  }

  sentToCart(myProduct:any):void{
    this.cartItem = {product: myProduct as Product, quantity:this.quantity} as CartItem
    this.cartItemAdded.emit(this.cartItem) ;
  }
}
