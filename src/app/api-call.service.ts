import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  movies : Movie[]= [] ; 
  constructor(private callHttp : HttpClient) { }


  
}
