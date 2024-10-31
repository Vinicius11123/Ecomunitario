import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  Nome : any;
  CPF : any;
  Email : any;
  DatadeNascimento : any;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
  }

  logar() {
    //alert("oi" + this.Nome)
    this.http.post(`http://localhost:8080/login`,`{"Nome":"${this.Nome}" "CPF":"${this.CPF}" "Email":"${this.Email}" "DatadeNascimento":"${this.DatadeNascimento}"}`)
      .subscribe(
        resultado =>{
          this.authService.login();
          this.router.navigateByUrl('/');
        },
        erro =>{
          if(erro.status==400){
            console.log(erro);
          }
        }
      )
    console.log("eae");
}
}

