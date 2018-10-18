import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//Router
import { routing } from './app.routing';
//Guards
import { AuthGuard } from './_guards/auth.guard';
//Services
import { AuthenticationService } from './_services/authentication.service';
//Helpers
import { tokenInterceptor } from './_helpers/token.interceptor';
import { errorInterceptor } from './_helpers/error.interceptor';
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
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    tokenInterceptor,
    errorInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
