import { createAction,props } from "@ngrx/store";
import { user } from "../user.model";

export const addTeacher=createAction('[Teachers] Add Teachers',props<{teacher:user}>())
export const removeTeacher=createAction('[Teachers] Remove Teacher',props<{id:string}>())
export const loadTeachers=createAction('[Teachers] Load Teachers',props<{teachers:any}>())