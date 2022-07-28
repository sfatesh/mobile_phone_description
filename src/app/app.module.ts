import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './layout/products/products.component';
import { AddproductComponent } from './layout/addproduct/addproduct.component';
import { EditproductComponent } from './layout/editproduct/editproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './layout/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddproductComponent,
    EditproductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
