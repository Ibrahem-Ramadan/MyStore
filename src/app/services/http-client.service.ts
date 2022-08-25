import { Inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  products:any;

  constructor(private httpClient:HttpClient ) { 
    this.getProducts().subscribe(res => {
      this.products=res;
    })
  }

  getProducts():Observable<any> {
    return this.httpClient.get<any[]>("../../../assets/data.json")
  }

}