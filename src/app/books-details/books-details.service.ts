import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  memberUrl = 'assets/data/book_list.json';

  constructor(private http: HttpClient) { }

  getBook(): Observable<any> {
    return this.http.get<any>(this.memberUrl);
  }
}