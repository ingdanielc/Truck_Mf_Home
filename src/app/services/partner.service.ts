import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PartnerService {
  basePath: string = environment._APIUrl + '/partner';

  constructor(private readonly http: HttpClient) {}

  getBirthdays() {
    return this.http.get<any>(`${this.basePath}/birthdays`);
  }

  getInactives() {
    return this.http.get<any>(`${this.basePath}/inactives/5`);
  }
}
