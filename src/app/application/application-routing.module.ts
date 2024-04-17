import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ApplicationComponent } from './application.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [{
  path: '', component: ApplicationComponent, children: [
  { path: 'demo', component:DemoComponent  },
  { path: 'add', component:AddComponent  },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
