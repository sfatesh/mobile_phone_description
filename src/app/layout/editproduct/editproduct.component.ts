import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  products=this.fb.group({
    productid:['',Validators.required],
    productname:['',Validators.required],
    productprice:['',Validators.required],
    productdesc:['',Validators.required]
  })

  constructor(private service:ApiService,private route:ActivatedRoute,private fb:FormBuilder,private router:Router) { }
  get f(){
    return this.products.controls
  }
product:any
  ngOnInit(): void {
    this.route.params.subscribe((p:any)=>{
      let id=p.id
      this.product=this.service.getProductByid(id)
      console.log(this.product)

    })
    let data={
      id:this.product.id,
      name:this.product.name,
      price:this.product.price,
      desc:this.product.description
    }
    this.products.controls['productid'].setValue(this.product.id)
    this.products.controls['productname'].setValue(this.product.name)
    this.products.controls['productprice'].setValue(this.product.price)
    this.products.controls['productdesc'].setValue(this.product.description)
  }
  Onsubmit(){
    let data={
      id:this.products.get('productid')?.value,
      name:this.products.get('productname')?.value,
      price:this.products.get('productprice')?.value,
      description:this.products.get('productdesc')?.value,
    }
    this.service.UpdateProduct(data)
    console.log(this.product.value)
    console.log(this.products.value)
    this.router.navigateByUrl('/product')
  }


}
