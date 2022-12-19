import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChecklistComponent } from './checklist/checklist.component';
import { SeverityComponent } from './severity/severity.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : "", component : LoginComponent},  // login in beginning
  {path:"severity",component:SeverityComponent},
  {path : "login", component : LoginComponent},  // login
  {path : "checklist", component : ChecklistComponent},  // checklists
  {path : "**", component : LoginComponent} // if nothing matches

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
