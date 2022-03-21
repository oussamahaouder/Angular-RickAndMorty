import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Caracter, results } from 'src/app/carac';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
value = "clear me"; 
resultat : results[] = [] ;  

formg : FormGroup ; 

form = this.formBuilder.group({ 
  name: '',
  selected : 'false'
 
})
  constructor(private formBuilder : FormBuilder , private http : HttpClient ) { 
    this.formg = formBuilder.group({
      checkbo : false
    })
  }

  ngOnInit(): void {
  }

  getCarac() {
    const param = new HttpParams().set('name',this.form.value.name);
   this.http.get<Caracter>('https://rickandmortyapi.com/api/character/',{params : param}).subscribe(data=> {
    this.resultat=data.results;
     
   })

  

  }
  onChange(e: any){
   

  }
}
