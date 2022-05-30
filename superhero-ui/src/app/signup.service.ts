import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import   {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './_models/user';


@Injectable({
  providedIn : 'root'
})
export class SignupService {

  /**
   *
   */
  constructor(private http: HttpClient) {

  }

  signup(user: User): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/User`, user);

  }
}
