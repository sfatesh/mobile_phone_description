import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddproductComponent } from './layout/addproduct/addproduct.component';
import { EditproductComponent } from './layout/editproduct/editproduct.component';
import { LoginComponent } from './layout/login/login.component';
import { ProductsComponent } from './layout/products/products.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductsComponent,canActivate: [AuthGuard]},
  {path:'addproduct',component:AddproductComponent,canActivate: [AuthGuard]},
  {path:'editproduct/:id',component:EditproductComponent,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
