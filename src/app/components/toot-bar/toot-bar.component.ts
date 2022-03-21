import { Component, OnInit } from '@angular/core';
/**
 * @title Basic menu
 */
@Component({
  selector: 'app-toot-bar',
  templateUrl: './toot-bar.component.html',
  styleUrls: ['./toot-bar.component.scss']
})
export class TootBarComponent implements OnInit {
  OnClick(event:Event){
    event.preventDefault() ; 
    console.log('going To Page')

  }
   
  constructor() { }

  ngOnInit(): void {
  }
  

}
