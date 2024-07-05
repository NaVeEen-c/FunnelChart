import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addStudent } from '../students.store/student.action';
import { user } from '../user.model'
import {v4 as uuid4} from 'uuid'
import { addTeacher } from '../teachers.store/teacher.action';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
 
  registerForm=new FormGroup(
    {
      name:new FormControl(' ',Validators.required),
      role:new FormControl('',Validators.required),
      plays:new FormControl('',Validators.required),
    }
  )
  constructor(private store:Store,){
    console.log('navin')
  }
  handleSubmit(){
   
    const User:user={
      id:uuid4(),
    
      name:this.registerForm.value.name||'',
      role:this.registerForm.value.role||'',
      plays:this.registerForm.value.plays||''

      
    }
    if(this.registerForm.value.role==='student'){
     
      this.store.dispatch(addStudent({student:User}))
      
    
    }
    else{
     
      this.store.dispatch(addTeacher({teacher:User}))
     
    }
    this.registerForm.patchValue({
      name:'',
      role:'',
      plays:''
    })
   
  }
 

}
