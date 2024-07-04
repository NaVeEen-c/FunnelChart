import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { StudentReducer } from './students.store/student.reducer';
import { TeacherReducer } from './teachers.store/teacher.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore({students:StudentReducer,teachers:TeacherReducer})]
};
