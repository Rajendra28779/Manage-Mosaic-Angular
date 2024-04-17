import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { DemoComponent } from './demo/demo.component';
import { AppfotterComponent } from './sheared/appfotter/appfotter.component';
import { AppheaderComponent } from './sheared/appheader/appheader.component';
import { AppsidebarComponent } from './sheared/appsidebar/appsidebar.component';
import { ApplicationComponent } from './application.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    ApplicationComponent,
    DemoComponent,
        AppfotterComponent,
    AppheaderComponent,
    AppsidebarComponent,
    AddComponent,
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
