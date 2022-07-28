import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './layout/addproduct/addproduct.component';
import { EditproductComponent } from './layout/editproduct/editproduct.component';
import { LoginComponent } from './layout/login/login.component';
import { ProductsComponent } from './layout/products/products.component';

const routes: Routes = [
  // {path:'**',component:LoginComponent},
  {path:'product',component:ProductsComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'editproduct/:id',component:EditproductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
