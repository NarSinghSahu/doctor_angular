import { Component, OnInit } from '@angular/core';
import {Observable,Observer} from 'rxjs/rx';
@Component({
  selector: 'app-observablex',
  templateUrl: './observablex.component.html',
  styleUrls: ['./observablex.component.css']
})
export class ObservablexComponent implements OnInit {

  constructor() { 
var myele = Observable.create(function(o : Observer<string>){

  setTimeout(function(){
o.next('Mohan')

  },2000)
  setTimeout(function(){
    o.error('Some err is here');
  },2000)
  setTimeout(function(){
    o.next('Sohan')
  },2000)

  setTimeout(function(){
    o.complete();
  },2000)
  


  setTimeout(function(){
    o.next('Rohan')
  },2000)

});

myele.subscribe(
  (rec)=>{
    console.log(rec)
  },
  (error)=>{
    console.log('The error is ')
    console.log(error)
  },
  ()=>{
    console.log('Gets completed')
  }
)

  }

  ngOnInit() {

  }

}
