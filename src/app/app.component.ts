import { Component ,Input , Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   doctor : any ;
  
   doctorSearched :any;

  passDoctor1(doctor){
    this.doctor = doctor;
  }

  passDoctor2(doctor){
    console.log("getting from searchcomponent  " + JSON.stringify( doctor));
    this.doctorSearched = doctor;
    
  }


}
