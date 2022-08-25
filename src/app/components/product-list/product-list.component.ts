import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/Models/CartItem';
import { Product } from 'src/app/Models/product';
import { CartManagementService } from 'src/app/services/cart-management.service';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private httpClientService:HttpClientService, private cartService:CartManagementService) { }

  productList : any

  ngOnInit(): void {
    this.httpClientService.getProducts().subscribe(
      products=>{
        this.productList = products as Product[];
      }
    );
  }
  addToCart(cartItem:any){
    this.cartService.addToCartList(cartItem as CartItem)
  }

}
