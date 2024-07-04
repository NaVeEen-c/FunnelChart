import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { merge ,mergeAll} from 'rxjs';
import { selectAllStudents } from '../students.store/student.selector';
import { selectAllTeachers } from '../teachers.store/teacher.selector';
import { AsyncPipe, NgFor } from '@angular/common';
import { user } from '../user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor,AsyncPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  
  users:user[]=[]
  // users:Observable<any[]>=new Observable()
  constructor(private store:Store){

  }
  ngOnInit(): void {
  
    // merge(this.store.select(selectAllTeachers),this.store.select(selectAllStudents)).subscribe(val=>{
    //   console.log(val,'merge')
    
    // })
  //  this.users= this.store.select(selectAllTeachers).pipe(
  //   mergeMap(teacher=>this.store.select(selectAllStudents).pipe(map(student=>{
      
  //     return [...teacher,...student]
  //   }

  //   ))
  //  ))


merge(this.store.select(selectAllTeachers),this.store.select(selectAllStudents)).pipe(
 
  mergeAll()).subscribe(user=>{
    console.log(user,"map")
    this.users.push(user)})
  }

}
