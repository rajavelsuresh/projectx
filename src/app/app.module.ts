import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';




import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


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
import { HeaderComponent } from './header/header.component';
import { from } from 'rxjs';
import { SitesComponent } from './sites/sites.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SitesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
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
