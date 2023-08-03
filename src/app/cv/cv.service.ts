import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CV_API_BACKEND } from '../app.config';
import { Observable } from 'rxjs';
import { Cv } from './model/cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  constructor(
    @Inject(CV_API_BACKEND) private cvApi: string,
    private http: HttpClient
  ) {}

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(this.cvApi);
  }
}
