import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookUrl = '../assets/data/book_list.json';

  constructor(private http: HttpClient) { }

  //Fonction qui permet de retourner les données des livres contenues dans le json
  getBook(): Observable<any> {
    return this.http.get<any>(this.bookUrl);
  }

}
