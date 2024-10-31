import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrl: './check.component.scss'
})
export class CheckComponent {
  isAuthenticated: boolean;

  constructor(private authService: AuthService,private http: HttpClient, private router: Router) {
    this.isAuthenticated = this.authService.isAuthenticatedUser();
  }

  users!: any[];

  logout() {
    this.authService.logout();
    this.isAuthenticated = false;
  }
  ngOnInit(): void {
    this.bixopiruleta();
  }
  bixopiruleta(){

    //alert("oi" + this.Nome)
    this.http.get<any>(`http://localhost:8080/check`)
      .subscribe(
        resultado =>{
          this.users = resultado;
        },
        erro =>{
          if(erro.status==400){
            console.log(erro);
          }
        }
      )
    console.log("eae");

  }
  calcisslangforcalculator(index:number){
    console.log('Button clicked for item at index:', index);
      //alert("oi" + this.Nome)
    this.http.post(`http://localhost:8080/delete`,`{"index":"${index}"}`)
      .subscribe(
        resultado =>{
          console.log("eae");
          this.bixopiruleta();
          this.router.navigateByUrl('/');
          this.bixopiruleta();
        },
        erro =>{
          if(erro.status==400){
            console.log(erro);
          }
        }
      )
    console.log("eae");
    this.bixopiruleta();
    this.router.navigateByUrl('/');
    this.bixopiruleta();
  }

}



