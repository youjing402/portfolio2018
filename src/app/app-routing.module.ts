import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StretchComponent } from './stretch/stretch.component';
import { EchoesComponent } from './echoes/echoes.component';
import { InvolvedComponent } from './involved/involved.component';
import { PocoComponent } from './poco/poco.component';
import { ItaleComponent } from './itale/itale.component';
import { DunhuangComponent } from './dunhuang/dunhuang.component';
import { JbComponent } from './jb/jb.component';


const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'projects/itale', component: ItaleComponent},
	{path: 'projects/dunhuang', component: DunhuangComponent},
	{path: 'projects/stretch', component: StretchComponent},
	{path: 'projects/echoes', component: EchoesComponent},
	{path: 'projects/involved', component: InvolvedComponent},
	{path: 'projects/poco', component: PocoComponent},
	{path: 'projects/jb', component: JbComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { enableTracing: true }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
