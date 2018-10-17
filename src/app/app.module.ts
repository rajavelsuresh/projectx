import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Router
import { routing } from './app.routing';
//Guards
import { AuthGuard } from './_guards/auth.guard';
//Services

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
