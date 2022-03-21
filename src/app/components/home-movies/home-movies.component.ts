import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Caracter, results } from 'src/app/carac';
/** @title Simple form field */
@Component({
  selector: 'app-home-movies',
  templateUrl: './home-movies.component.html',
  styleUrls: ['./home-movies.component.scss']
})
export class HomeMoviesComponent implements OnInit {
  resultat : results[] = [] ;  
  likedOrNot : any  ; 
  constructor(private httpRequest : HttpClient) { }

  ngOnInit(): void {
    this.httpRequest.get<Caracter>('https://rickandmortyapi.com/api/character').subscribe(data=>{
      this.resultat=data.results;
  }

    )
    
  }
  Onlike(index:number){
    this.likedOrNot = true ; 

    console.log('liked',this.resultat[index].name)

  }
  onUnlike(index:number){
    this.likedOrNot = false ;
    console.log('unliked',this.resultat[index].name)

  }
}
