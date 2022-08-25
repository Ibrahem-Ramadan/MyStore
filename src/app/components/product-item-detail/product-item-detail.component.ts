import { Component, OnInit ,ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/Models/CartItem';
import { Product } from 'src/app/Models/product';
import { CartManagementService } from 'src/app/services/cart-management.service';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  constructor(private httpService:HttpClientService, private url:ActivatedRoute , private cartService:CartManagementService ) {
  }
  products:Product[]=[];
  productId:any;
  productDetails:any;
  quantity:number=1;

  ngOnInit(): void {
    this.products = this.httpService.products
    this.productDetails = this.products.filter(p=> p.id == this.url.snapshot.params['id'])[0] as Product
  }

  addToCart(productDetails:any){

    let cartItem : CartItem = {product : productDetails, quantity:this.quantity}
    this.cartService.addToCartList(cartItem)
  }
}
