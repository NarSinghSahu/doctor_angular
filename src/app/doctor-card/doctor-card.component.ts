import { Component, OnInit } from '@angular/core';
import { Input ,Output , EventEmitter } from '@angular/core';
import { Doctor } from '../doctors/doctor';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent implements OnInit {
 @Input() doctor :Doctor[] = [];
 @Output() doctor2 = new EventEmitter<Doctor[]>();
 @Output() doctor3 = new EventEmitter<Doctor[]>();
  constructor() { }

  ngOnInit() {
  }

  view(doc){
    alert("emiting view doctor"+JSON.stringify(doc));
    this.doctor2.emit(doc);
  }

  edit(doc){
    this.doctor3.emit(doc);
  }

}
