import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn : 'root'
})
 export class ApiService{
     constructor(private http : HttpClient){}

     getProducts(){
         return this.http.get<any>("https://localhost:7276/api/Product")
         .pipe((response : any )=>{
             console.log(response);
             return response;
         })
     }
 }
