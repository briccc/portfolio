import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule, ComponentsModule,
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent
  ]
})
export class PagesModule { }
