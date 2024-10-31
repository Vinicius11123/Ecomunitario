import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  Nome : any;
  CPF : any;
  Email : any;
  DatadeNascimento : any;

  constructor(private http: HttpClient) {
  }

  registrar() {
    //alert("oi" + this.Nome)
    this.http.post(`http://localhost:8080/artemis`,`{"Nome":"${this.Nome}" "CPF":"${this.CPF}" "Email":"${this.Email}" "DatadeNascimento":"${this.DatadeNascimento}"}`)
      .subscribe(
        resultado =>{
          console.log(resultado);
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
