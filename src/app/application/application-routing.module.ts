import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ApplicationComponent } from './application.component';

const routes: Routes = [{
  path: '', component: ApplicationComponent, children: [
  { path: 'add', component:AddComponent  },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
