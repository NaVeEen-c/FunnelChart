import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../user.model';
import { Store } from '@ngrx/store';
import { selectAllStudents } from '../students.store/student.selector';
import { AsyncPipe, NgFor } from '@angular/common';
import { loadStudents } from '../students.store/student.action';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [NgFor,AsyncPipe],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{
  students$:any
  constructor(private store:Store){}
  ngOnInit(): void {
  //  this.store.dispatch(loadStudents({students:JSON.parse(localStorage.getItem('students')||"[]")}))
    this.students$=this.store.select(selectAllStudents)
    this.saveToLocalStorage()
  }
  saveToLocalStorage(){
    this.store.select(selectAllStudents).subscribe((students)=>{
      localStorage.setItem('students',JSON.stringify(students))
    })

  }


}
