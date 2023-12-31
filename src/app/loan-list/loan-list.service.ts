import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  loansUrl = 'assets/data/loans_list.json';

  constructor(private http: HttpClient) { }

  getLoans(): Observable<any> {
    return this.http.get<any>(this.loansUrl);
  }

}
