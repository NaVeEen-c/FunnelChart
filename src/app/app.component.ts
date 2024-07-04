import { Component, OnInit, Type } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { UsersComponent } from './users/users.component';
import { GridsterModule ,GridType,GridsterConfig,GridsterItem, DisplayGrid} from 'angular-gridster2';
import { CommonModule, NgFor } from '@angular/common';

interface PannelItem extends GridsterItem{
  component:Type<any>
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RegisterComponent,StudentsComponent,TeachersComponent,UsersComponent,GridsterModule,NgFor,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'merging-observables';
  options:GridsterConfig={};
  Pannels:Array<PannelItem>=[];
  ngOnInit(): void {
    this.options={
      gridType:GridType.Fit,
      displayGrid:DisplayGrid.Always,
      draggable:{
        enabled:false,
        ignoreContentClass: 'no-drag',
      },
      resizable:{
        enabled:true,
        
      },
      margin:2,
      outerMargin:true,
      minCols:1,
      maxCols:6,
      maxRows:6,
      minRows:1

    }
    this.Pannels=[
      {
        cols:1,rows:1,y:0,x:0,component:RegisterComponent
      },
      {
        cols:1,rows:1,y:0,x:1,component:StudentsComponent
      },
      {
        cols:1,rows:1,y:0,x:2,component:TeachersComponent

      },
      {
        cols:3,rows:1,y:1,x:0,component:UsersComponent
      }
    ]
  }
}
