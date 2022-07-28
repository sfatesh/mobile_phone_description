import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any

  constructor(private service:ApiService) { }

  ngOnInit(): void {
   this.service.getProduct((res:any)=>{
    console.log(res)
    res.filter((e:any)=>{
      if(e.price>20000){

      }
    })
    this.products=res
   })
  }
  ondelte(value:any){
    this.service.delete(value)
    alert('Deleted Successfully')
    console.log(value)
  }
  onedit(value:any){
    // this.service.productedit(value).subscribe((res:any)=>{})
    // console.log(value)
  }
 
}
