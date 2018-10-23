import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(() => {

          // authenticate
          if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
              let user = {
                  id: 1,
                  username: 'admin',
                  password: 'admin',
                  firstName: 'FirstName',
                  lastName: 'LastName',
                  token: 'fake-token'
              };

              if (user.username === request.body.username && user.password === request.body.password) {
                  // if login details are valid return 200 OK with user details and fake jwt token
                  return of(new HttpResponse({ status: 200, body: user }));
              } else {
                  // else return 400 bad request
                  return throwError({ error: { message: 'Username or password is incorrect' } });
              }
          }

          if (request.url.endsWith('/api/dashboard') && request.method === 'GET') {
              
          }

          // pass through any requests not handled above
          return next.handle(request);

    }))
    // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
    .pipe(materialize())
    .pipe(delay(500))
    .pipe(dematerialize());
  }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
