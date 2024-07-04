import { createAction,props } from "@ngrx/store";
import { user } from "../user.model";
import { studentsState } from "./student.reducer";
export const addStudent=createAction('[Students] Add Student',props<{student:user}>())
export const removeStudent=createAction('[Students] Remove Student',props<{id:string}>())
export const loadStudents=createAction('[Students] Load Students',props<{students:any}>())