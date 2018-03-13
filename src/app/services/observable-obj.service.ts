import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class ObservableObjService {
  public sendObs : any;
  constructor() { 
    this.sendObs = new Observable((o:Observer<{}>)=>{
        setInterval(()=>{
          o.next({
            name : "Satish",
            age : 20
          });
        },1000);

        setTimeout(()=>{
          o.error("No object to send ... ");
        },20000);

        setTimeout(()=>{
          o.complete();
        },15000);
    })
  }

}
