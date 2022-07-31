import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { delay, map,  tap } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Product:any=[{id:Number,name:String,price:Number,description:String}]


  constructor() {
    this.Product=[
      {id:1,name:"asus mobile",price:25000,description:'Inspiring Innovation Persistent Perfection'},
      {id:2,name:"samsung mobile",price:35000,description:'Do What you cant'},
      {id:3,name:"one plus mobile",price:45000,description:'Never Settle'},
      {id:4,name:"realme mobile",price:15000,description:'Proud To Be Young'},
      {id:5,name:"redmi mobile",price:20000,description:'Rise To The Chalange'},
    ]
   }
   getProduct(callback:any){
    callback(this.Product)
   }
   addproduct(product:any){
    this.Product.push(product)
   }
   delete(i:any){
    this.Product.splice(i,1)
   }
   data:any
   productedit(i:any){
   this.data=this.Product.splice(i,1) 
   console.log(this.data)
  }
  getProductByid(id:any){
    let product:{id:Number,name:String,price:Number,description:String}={id:0,name:"",price:0,description:""}
    for(let p of this.Product){
      if(p.id==id){
        product=p
        console.log(product)
      }
    }
    return product
  }

  UpdateProduct(product:any){
    let data=this.Product.find((p:any)=>p.id===product.id)
    data.name=product.name
    data.price=product.price
    data.description=product.description
    alert('Edited Successfully')
    console.log(this.Product)
  }
  //-----------------------authentication----------------------------------------
  flag: boolean = false;

   login(userName: string, password: string): any {
      console.log(userName);
      console.log(password);
      this.flag = userName == 'admin' && password == 'admin@123';
      localStorage.setItem('isUserLoggedIn', this.flag ? "true" : "false"); 

   return of(this.flag).pipe(
      delay(1000),
      tap(val => { 
         console.log("Is User Authentication is successful: " + val); 
      })
   );
   }

   logout(): void {
   this.flag = false;
      localStorage.removeItem('isUserLoggedIn'); 
   }



}
