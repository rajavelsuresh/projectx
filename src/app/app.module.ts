import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// google map
import { AgmCoreModule } from '@agm/core';





import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


// Fake FakeBackend
import { fakeBackendProvider } from './_mock/fake-backend';
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA3ZqK1X6lYG0IGl44A9svvgNw51p5k8QA'
    }),
    routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    tokenInterceptor,
    errorInterceptor,

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
