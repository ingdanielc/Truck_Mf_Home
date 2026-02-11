import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { HttpHeadersInterceptor } from './http-headers.service';
import { environment } from 'src/environments/environment';

describe('HttpHeadersInterceptor', () => {
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpHeadersInterceptor,
            multi: true
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
});
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add an Ocp-Apim-Subscription-Key header', () => {
    const testUrl = '/data';
    
    httpClient.get(testUrl).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(testUrl);
    expect(req.request.headers.has('Ocp-Apim-Subscription-Key')).toEqual(true);
    expect(req.request.headers.get('Ocp-Apim-Subscription-Key')).toEqual(environment.subscription);
    req.flush({}); // Simula una respuesta vacía
  });
});
