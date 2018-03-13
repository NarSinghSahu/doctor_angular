import { Component, OnInit } from '@angular/core';
import {Observable,Observer} from 'rxjs/rx';
import {ObservableObjService} from '../services/observable-obj.service'
@Component({
  selector: 'app-observabley',
  templateUrl: './observabley.component.html',
  styleUrls: ['./observabley.component.css']
})
export class ObservableyComponent implements OnInit {
private myele : any;
  constructor(private obser : ObservableObjService) {

   }

  ngOnInit() {
    this.add(1,6).then(function(res){
console.log('The sum is ')
console.log(res)
    })
    .catch(function(error){
      console.log('The error is '+error)
    })
//     this.obser.sendObs.subscribe(
//       (rec)=>{
// console.log(rec)
//       },
//       (error)=>{
// console.log(error)
//       },
//       (complete)=>{
// console.log(complete)
//       }
//     )
  }

add(a,b){
 var t = new Promise((resolve,reject)=>{
  setTimeout(()=>{
resolve(a+b)
  },3000)
})
return t;
}

}
