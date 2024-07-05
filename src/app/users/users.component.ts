import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable,mergeMap,map} from 'rxjs';
import { selectAllStudents } from '../students.store/student.selector';
import { selectAllTeachers } from '../teachers.store/teacher.selector';
import { AsyncPipe, NgFor } from '@angular/common';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor,AsyncPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  

  users:Observable<any[]>=new Observable()

  constructor(private store:Store){
   
    

  }

  ngOnInit(): void {
  
   
   this.users= this.store.select(selectAllTeachers).pipe(
    mergeMap(teacher=>this.store.select(selectAllStudents).pipe(map(student=>{
      console.log("hii")
      return [...teacher,...student]
    }

    ))
   ))



 
  }

}

