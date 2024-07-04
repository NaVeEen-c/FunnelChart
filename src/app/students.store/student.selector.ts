import {createFeatureSelector,createSelector,props } from "@ngrx/store";
import { user } from "../user.model";
import { studentsState } from "./student.reducer";
export const selectStudents=createFeatureSelector<studentsState>('students')
export const selectAllStudents=createSelector(
    selectStudents,
    (state:studentsState)=>state.students
)