import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent {

  product:Product=new Product();

  constructor(private productService: ProductService, private router: Router){

  }

  addProduct(){
    this.productService.postProduct(this.product)
    .subscribe({
     next:(data) => {
       console.log(data);
     },
     error:(error) =>{
       console.log(error);
     }
    });
    this.product=new Product();
 
    this.router.navigate(['/productlist']);
   }
}
