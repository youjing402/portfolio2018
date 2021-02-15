import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TitleService } from './title.service'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

import { StretchComponent } from './stretch/stretch.component';
import { FitmiComponent } from './fitmi/fitmi.component';
import { EchoesComponent } from './echoes/echoes.component';
import { InvolvedComponent } from './involved/involved.component';
import { PocoComponent } from './poco/poco.component';

import { LightboxModule } from 'ngx-lightbox';

import { BROWSER_FAVICONS_CONFIG } from "./favicons.service";
import { BrowserFavicons } from "./favicons.service";
import { Favicons } from "./favicons.service";
import { ItaleComponent } from './itale/itale.component';
import { DunhuangComponent } from './dunhuang/dunhuang.component';
import { JbComponent } from './jb/jb.component';


@NgModule({
  declarations: [
  AppComponent,
  HomeComponent,
  StretchComponent,
  FitmiComponent,
  EchoesComponent,
  InvolvedComponent,
  PocoComponent,
  ItaleComponent,
  DunhuangComponent,
  JbComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  NgbModule.forRoot(),
  AngularFontAwesomeModule,
  AnimateOnScrollModule.forRoot(),
  LightboxModule
  ],
  providers: [TitleService, 
  {provide: Favicons,
    useClass: BrowserFavicons},
    {
      provide: BROWSER_FAVICONS_CONFIG,
      useValue: {
        icons: {
          "red": {
            type: "image/png",
            href: "./assets/img/favicon-red.png",
            isDefault: true
          },
          "purple": {
            type: "image/png",
            href: "./assets/img/favicon-purple.png"
          },
          "green": {
            type: "image/png",
            href: "./assets/img/favicon-green.png"
          },
          "coral": {
            type: "image/png",
            href: "./assets/img/favicon-coral.png"
          },
          "blue": {
            type: "image/png",
            href: "./assets/img/favicon-blue.png"
          }
        },

        // I determine whether or not a random token is auto-appended to the HREF
        // values whenever an icon is injected into the document.
        cacheBusting: true
      }
    }],
    bootstrap: [AppComponent]
  })
export class AppModule { }
