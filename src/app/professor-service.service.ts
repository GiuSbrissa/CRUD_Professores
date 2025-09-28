// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProfessorServiceService {

//   constructor() { }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from '../professor';


@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  apiUrl = "http://localhost:3000/professores";
  
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Professor[]>{
    return this.http.get<Professor[]>(this.apiUrl);
  }
  
}