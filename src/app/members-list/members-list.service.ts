import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  memberUrl = '../assets/data/members_list.json';

  constructor(private http: HttpClient) { }

  getMember(): Observable<any> {
    return this.http.get<any>(this.memberUrl);
  }

}
