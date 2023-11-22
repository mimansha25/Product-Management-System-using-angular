import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl="http://localhost:8097/api/v1/product";
  constructor(private http: HttpClient) { }

  productlist() : Observable<any>{
     return this.http.get(this.baseUrl);
  }

  postProduct(newproduct: Product): Observable<any>{
    return this.http.post(this.baseUrl,newproduct)
  }

  getProductById(id:number):Observable<any>{
    return this.http.get(this.baseUrl + id);
  }

  deleteProductById(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+"/"+id,{responseType:"text"});
  }

  updateProduct(newproduct: Product): Observable<any>{
    return this.http.post(this.baseUrl,newproduct)
  }


}
