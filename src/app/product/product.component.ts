import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[]=[];

  productUpdate: Product = new Product();

  isUpdate: boolean=false;
  isUpdateSuccess: boolean=false;

  constructor(private productService: ProductService, private router: Router){

  }

  ngOnInit()  {
     this.loadAllProductstoComponent();
  }

  loadAllProductstoComponent(){
 
    this.productService.productlist().subscribe({
      next:(response:any)=>this.products=response,
      error:(error:any)=>console.log(error),
      complete: () => {console.log("Loaded all data");}
    });
  }

  deleteProductById(deleteId: number){
    if(confirm("Do you want to delete Product")){
      console.log("delete method: " +deleteId);
      this.productService.deleteProductById(deleteId)
      .subscribe(
          {
                next: (data:any) => {
               console.log(data);
               this.loadAllProductstoComponent();
             },
               error:(error:any) =>{
               console.log(error);
             }
          }
      );
    }   

  }


  gotToAddProduct(){
    alert("navigating");
    this.router.navigate(['/newproduct']);
  }

  updateProduct(product:Product){
    this.isUpdate=true;
    this.productUpdate=product;
  }

  updateProductSubmit(){
    console.log(this.productUpdate);
    this.productService.postProduct(this.productUpdate)
    .subscribe({
     next:(data) => {
       console.log(data);
     },
     error:(error) =>{
       console.log(error);
     }
    });
    
 
    this.router.navigate(['/productlist']);

    this.isUpdate=false;
    this.isUpdateSuccess=true;
  }

  displayProductDetail(id:number){
    console.log(id);
    this.router.navigate(['detail/', id]);
  }

}
