import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { HighlightCardComponent } from './highlight-card/highlight-card.component';
import { ResourcesComponent } from './resources/resources.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', redirectTo: '/highlight-card', pathMatch: 'full' },
  { path: 'highlight-card', component: HighlightCardComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-form', component: EmployeeFormComponent }
  // Add other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
