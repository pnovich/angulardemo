import { Routes } from '@angular/router';
import {PersonGridComponent} from './person-grid/person-grid.component';
import {PersonAddEditComponent} from './person-add-edit/person-add-edit.component';

export const routes: Routes = [
  {path: 'add-person', component: PersonAddEditComponent},
  {path: 'dashboard', component: PersonGridComponent}
];
