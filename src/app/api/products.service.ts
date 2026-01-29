import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private productServiceAPI: HttpClient) { }

  getProducts(){
    return this.productServiceAPI.get<any>('https://dummyjson.com/products');
  }
}
