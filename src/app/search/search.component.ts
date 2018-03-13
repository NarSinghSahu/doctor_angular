import { Component, OnInit , Input ,Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() doctorGet :any;
  @Output() doctorSend = new EventEmitter<any>();
  searchedValue :string ;
  constructor() { }

  ngOnInit() {
  }

        searchDoctor( ){
          console.log("enter searchDoctor() --- searchComponent.ts");
          console.log(this.searchedValue);
          if(this.searchedValue != null){
                for(var i = 0 ;i< this.doctorGet.length ;i++){
                  if( this.doctorGet[i].data.name == this.searchedValue){
                    console.log("emiting from searchcomponent  "+JSON.stringify(this.doctorGet[i].data));
                      this.doctorSend.emit(this.doctorGet[i].data);
                  }
                }

          }
          
        }

}
