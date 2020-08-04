import { Component, OnInit } from '@angular/core';
import { Iproduct } from './productInterface';
import { ProductService } from './product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  ProductList: String="Product List";

  imgWidth: number = 50;
  imgMargin: number = 2;
  showImage: boolean= false;
  _listFilter: string;
  errorMessage:string;

  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value :string){
    this._listFilter = value;
    this.filterProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filterProducts:Iproduct[];
  products: Iproduct[] =[];
  
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products=>{
        this.products = products;
        this.filterProducts = this.products;
      },
      error: err=> this.errorMessage = err
    });
  
    // this.listFilter = "cart";
  }

  constructor(private productService: ProductService){

  }

  performFilter(filterBy:string): Iproduct[]{

      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product:Iproduct)=>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void{
    this.showImage= !this.showImage;
  }




}
