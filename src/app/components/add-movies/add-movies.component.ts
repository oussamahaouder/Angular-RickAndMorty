import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder  } from '@angular/forms';

import { Movie } from 'src/app/movie';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.scss']
})
export class AddMoviesComponent implements OnInit {

  movies : Movie[] = [] ; 

  addmovieForm= this.formbuilder.group({
      name:'' ,
      validated:false
  }); 
  constructor(private formbuilder: FormBuilder , private callHttp : HttpClient ) { }
 ; 
  ngOnInit(): void {
  }

   onvalidation(){
    if (this.addmovieForm.value.name != ''  )
    {
   
      this.movies.push(this.addmovieForm.value);
      this.setdata(this.movies)
      console.log(this.getdata())
    } 
    else(console.log('error')) 
  }

  elementDelete(index : number) {

    this.movies.splice(index,1)
  
  }
  elementValidate(index : number){ 
    this.movies[index].validated = true ;
       
    }

    setdata(data :Movie[]) {
      const moviesdata = JSON.stringify(data);
      this.callHttp.post('http://localhost:8080/MoviesAdd',{"name" : this.addmovieForm.value.name, "validated" : this.addmovieForm.value.validated}).subscribe(res=>{
        console.log('res',res)
      });
      localStorage.setItem('myMovie' , moviesdata)
    }

    getdata() {
      return localStorage.getItem('myMovie')
    }

    getMovies(){
      
      const res= this.callHttp.get<Movie>('http://localhost:8080/Movies'); 
      res.subscribe(data=>{
          console.log('toto',data)
      })
    }


}
