import {createFeatureSelector,createSelector,props } from "@ngrx/store";
import { user } from "../user.model";
import { teachersState } from "./teacher.reducer";
export const selectTeachers=createFeatureSelector<teachersState>('teachers')
export const selectAllTeachers=createSelector(
    selectTeachers,
    (state:teachersState)=>state.teachers
)