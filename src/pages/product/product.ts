import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ProductService } from "../../providers/product.service";

import { ProductDetailPage } from "../product-detail/product-detail";
import { Category } from "../../entities/category";
import { Product } from "../../entities/product";
import { CategoryService } from "../../providers/category.service";

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
  providers: [ProductService, CategoryService]
})
export class ProductPage {

  products: Product[];
  categories: Category[];
  selectedCategory: string;
  filterText: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private productService: ProductService,
    private categoryService: CategoryService,
    public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    let loader=this.loadingController.create({
      content:"Please wait..."
    });

    loader.present().then(()=>{
      this.getProducts();
      this.getCategories();
      loader.dismiss();
    });
 
  }

  getProducts() {
    this.productService.getProducts().subscribe(p => {
      this.products = p;
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(data => this.categories = data)
  }

  itemTapped(event, product) {
    this.navCtrl.push(ProductDetailPage, { item: product });
  }

  getItems() {
    var val = this.filterText;
    if (val && val.trim() != '') {
      this.productService.getProducts(this.selectedCategory).subscribe(p => this.products = p.filter(item => {
        return item.productName.toLowerCase().indexOf(val.toLowerCase()) > -1;
      }))
    } else {
      this.productService.getProducts(this.selectedCategory).subscribe(p => {
        this.products = p;
      });
    }
  }
}
