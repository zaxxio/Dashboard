import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MainNavComponent} from './components/main-nav/main-nav.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {SideNavComponent} from './components/main-nav/side-nav/side-nav.component';
import {MatListModule} from "@angular/material/list";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SubmissionComponent } from './pages/submission/submission.component';
import {MatCard, MatCardTitle} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SideNavComponent,
    DashboardComponent,
    SubmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCard,
    MatCardTitle
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
