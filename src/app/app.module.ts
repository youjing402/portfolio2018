import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { HomeComponent } from './home/home.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StretchComponent } from './stretch/stretch.component';
import { FitmiComponent } from './fitmi/fitmi.component';
import { EchoesComponent } from './echoes/echoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StretchComponent,
    FitmiComponent,
    EchoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AnimateOnScrollModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
