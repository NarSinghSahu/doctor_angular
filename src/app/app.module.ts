import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { PlayerComponent } from './player/player.component';
import { SachinComponent } from './sachin/sachin.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TriangleComponent } from './triangle/triangle.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { EmployeeService } from './services/employee.service';
import { ProfileComponent } from './profile/profile.component';
import { HttpModule } from '@angular/http';
import { DoctorCardComponent } from './doctor-card/doctor-card.component';
import {DropdownModule} from 'primeng/primeng';
import { DropComponent } from './drop/drop.component';
import { SearchComponent } from './search/search.component';
import { ObservablexComponent } from './observablex/observablex.component';
import { ObservableyComponent } from './observabley/observabley.component';
import { ObservableObjService } from './services/observable-obj.service';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    PlayerComponent,
    SachinComponent,
    CalculatorComponent,
    TriangleComponent,
    DoctorsComponent,
	ProfileComponent,
	DoctorCardComponent,
	DropComponent,
	SearchComponent,
	ObservablexComponent,
	ObservableyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DropdownModule
    
  ],
  providers: [EmployeeService, ObservableObjService],
  bootstrap: [AppComponent]
})
export class AppModule { }
