import { Component, OnInit,Input,Output , EventEmitter} from '@angular/core';
import { Http,Response } from '@angular/http';
import { Doctor } from './doctor';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

 private doctor:Doctor[] =[];
 @Input() showSearchedDoctor : any ;
 @Output() passDoctor = new EventEmitter<any>();
 showTemplate: boolean = false;
 showProfile:boolean = false;
 key:string = null;
 private newDoc:Doctor;
 private profileDoc:Doctor;
 docData:any[] = [] ;
 isEdit:boolean = false;
 isAdd:boolean = false;


  constructor(public http:Http) { }

  ngOnInit() {
      this.fetchDoctor();
    
  }

 
  fetchDoctor(){

    this.http.get('https://kiyo-94ffa.firebaseio.com/user.json').subscribe(
      (res:Response) => {
        console.log('The response is ')
        console.log(res)
       var temp = res.json();
         
        console.log(temp);
      
       var record = Object.keys(temp).map(function(key){
        console.log( "Received data ---------- "+key);

          //return {key:key,data:temp[key]};
          return new Doctor(key,temp[key].name,temp[key].age,temp[key].spec);
        });
        console.log("Record is : " + JSON.stringify(record));
        this.doctor = record;
        console.log("Doctor is : "+this.doctor);
        this.passDoctor.emit(this.docData);
      
      

    },
   (error) =>{
     console.log("Error retriving data ...............");
   }
  
  );


  }//...................fetchdoctor...........................................


 
  deleteDoctor(key:string){
    
    alert("delete doctor "+key + this.profileDoc.getKey());
    if(key==="1"){
       key = this.profileDoc.getKey();
     
    }

    this.http.delete('https://kiyo-94ffa.firebaseio.com/user/'+key+'.json').subscribe(
      (error)=>{
        console.log("error retriving data ------------");
      }
    );

    
  }//.....................deleteDoctor...............................................

 


  profile(doc){
    this.showProfile = true;
    alert("profile of "+doc.data.name);
    this.profileDoc = doc;

  }

  edit(doc){
    this.toggle(2);
    alert("edit doctor "+doc.data.name+doc.data.spec+doc.data.age+doc.key);
    this.newDoc = doc.data;
    this.key = doc.key;
  }

  update(key){

      this.http.put('https://kiyo-94ffa.firebaseio.com/user/'+this.key+'.json',this.newDoc).subscribe(
        (error)=>{
          console.log("error updating data ------------");
        }

      );
  }



  public add(){

       
          alert("new doctor ");
          this.http.post('https://kiyo-94ffa.firebaseio.com/user.json',this.newDoc).subscribe(data => {
          },
        (error) =>{
          console.log("Error sending data ...............");
        }
        
        );
        
  } //  .................add () ........................

  public toggle(data : number){

            if(data ===  1){
              this.showTemplate = true;
              this.isEdit = false;
              this.isAdd = true;

            }if(data === 2){
              this.isEdit = true;
              this.isAdd = false;
              this.showTemplate = true;
            }

  }






}
