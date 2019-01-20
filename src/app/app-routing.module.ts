import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StretchComponent } from './stretch/stretch.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'projects/stretch', component: StretchComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { enableTracing: true }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
