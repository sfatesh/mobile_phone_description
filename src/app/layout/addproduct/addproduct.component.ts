import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
product=this.fb.group({
  productid:['',Validators.required],
  productname:['',Validators.required],
  productprice:['',Validators.required],
  productdesc:['',Validators.required]
})
  constructor(private fb:FormBuilder,private service:ApiService,private router:Router) { }
 public getfb(){
  return this.product.controls
 }
  ngOnInit(): void {
  }
  Onsubmit(){
    let data={
      id:this.product.get('productid')?.value,
      name:this.product.get('productname')?.value,
      price:this.product.get('productprice')?.value,
      description:this.product.get('productdesc')?.value,
    }
    if(this.product.invalid){
      alert('Fill the Input Box')
      return
    }
    this.service.addproduct(data)
    console.log(this.product.value)
    this.router.navigateByUrl('/product')
  }

}
