import { AsyncPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllTeachers } from '../teachers.store/teacher.selector';
import { loadTeachers } from '../teachers.store/teacher.action';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [NgFor,AsyncPipe],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent implements OnInit{
teachers$:any
constructor(private store:Store){

}

  ngOnInit(): void {
    //this.store.dispatch(loadTeachers({teachers:JSON.parse(localStorage.getItem('teachers')||"[]")}))
    this.teachers$=this.store.select(selectAllTeachers)
    this.saveToLocalStorage()
    
    
  }
  saveToLocalStorage(){
    this.store.select(selectAllTeachers).subscribe((teachers)=>{
      localStorage.setItem('teachers',JSON.stringify(teachers))
    })
  }

}
