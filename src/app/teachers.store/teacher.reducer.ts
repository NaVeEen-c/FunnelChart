import { createReducer,on } from "@ngrx/store";
import { addTeacher,loadTeachers,removeTeacher } from "./teacher.action";
import { user } from "../user.model";
import { startWith } from "rxjs";
export interface teachersState{
    teachers:user[]
}
export const intialState:teachersState={
    teachers:[]=JSON.parse(localStorage.getItem('teachers')||"[]")
}
const _TeacherReducer=createReducer(
    intialState,
    on(addTeacher,(state,{teacher})=>{
        return {
            teachers:[...state.teachers,teacher]
        }
    }),
    on(removeTeacher,(state,{id})=>{
        return(
           {teachers: state.teachers.filter(teacher=>teacher.id!==id)}
        )
    }),
    on(loadTeachers,(state,{teachers})=>({
        teachers:teachers
    }))
)
export function TeacherReducer(state:any, action:any) {
    return _TeacherReducer(state, action);
  }