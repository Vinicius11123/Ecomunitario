import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss'
})
export class ApiComponent {
  movieData: any;
  Filme: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }
  getData(){

    function formatStringForRequest(input: string): string {
      if(!input){
        return "ca";
      }else{
      // Remove accents
      let formattedString = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      // Replace spaces with '+'
      formattedString = formattedString.replace(/\s+/g, '+');

      return formattedString;
      }
    }


    let mystring: string = 'https://api.themoviedb.org/3/search/movie?query=';
    let filme: string = this.Filme;
    filme = formatStringForRequest(filme);
    mystring+=filme+='&api_key=72763d62aa3320b77ad2d013c9dabdfa';

    let cu: string = 'https://api.themoviedb.org/3/movie/101?api_key=72763d62aa3320b77ad2d013c9dabdfa'

    this.http.get<any>(mystring).subscribe((data) => {
      this.movieData = data.results[0];
      console.log(this.movieData);
      //this.movieData = data;
      //console.log(data);
    });


  }
}
