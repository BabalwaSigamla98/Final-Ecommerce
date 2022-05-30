import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn : 'root'
})
export class LoginService {

  /**
   *
   */
  constructor(private http: HttpClient) {

  }

  login(loginvalues: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/Login`, loginvalues);

  }
}
