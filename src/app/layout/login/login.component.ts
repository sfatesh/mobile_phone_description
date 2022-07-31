import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string="";
   password: string="";
   formdata:any

  constructor(private authService : ApiService, private router : Router) { }

  ngOnInit(): void {
    this.formdata=new FormGroup({
      userName: new FormControl(""),
      password: new FormControl(""),

    })
  }
  onClickSubmit() {
    this.userName = this.formdata.get('userName').value;
    this.password = this.formdata.get('password').value

    console.log("Login page: " + this.userName);
    console.log("Login page: " + this.password);

    this.authService.login(this.userName, this.password)
       .subscribe( (data:any) => { 
          console.log("Is Login Success: " + data); 
    
         if(data) this.router.navigate(['/product']); 
    });
 }

}
