import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { appConstant } from '../app.constant';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

product: Product | any = '';
id: number | String = '';
productForm: FormGroup;

constructor(
  private activatedRoute: ActivatedRoute,
  private http: HttpClient,
  private fb: FormBuilder
) {}

ngOnInit(): void {
  this.activatedRoute.params.subscribe((data) => {
    this.getProduct((data as any).id);
  });
 // this.initialize();
}

//initialize(){
//  this.initializeForm();
//}

initializeForm(product:any){
  this.productForm = this.fb.group({
    title: [product.title,[Validators.required]],
    description: [product.description, Validators.required],
    category: [product.category, Validators.required],
    price: [product.price, Validators.required]
    
  });
}

getProduct(id: number) {
  this.http
    .get(`${environment.apiEndpoint}${appConstant.apiRoute.products}/${id}`)
    .subscribe((data) => {
      this.product = data;
      this.initializeForm(data);
      console.log(data);
    });
}
onSubmit(formValue: any, isValid: boolean){
  if (isValid){
    console.log(formValue);
    console.log(isValid);
  }
}

}