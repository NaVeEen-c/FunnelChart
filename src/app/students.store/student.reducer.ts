import { createReducer,on } from "@ngrx/store";
import { addStudent,loadStudents,removeStudent } from "./student.action";
import { user } from "../user.model";

export interface studentsState{
    students:user[]
}
export const intialState:studentsState={
    students:[]=JSON.parse(localStorage.getItem('students')||"[]")
}
const _StudentReducer=createReducer(
    intialState,
    on(addStudent,(state,{student})=>{
        return {
            students:[...state.students,student]
        }
    }),
    on(removeStudent,(state,{id})=>{
        return(
           {students: state.students.filter(student=>student.id!==id)}
        )
    }),
    on(loadStudents,(state,{students})=>{
        return {students:students}
    })
)
export function StudentReducer(state:any, action:any) {
    return _StudentReducer(state, action);
  }