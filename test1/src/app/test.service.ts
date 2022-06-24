import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Test } from './test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private baseURL = "http://localhost:8072/api/v1/tests";

  constructor(private httpClient: HttpClient) { }
  
  
  getTestsList(): Observable<Test[]>{
    return this.httpClient.get<Test[]>(`${this.baseURL}`);
  }
createTest(test: Test): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}` ,test);
}

getTestbyId(id: number): Observable<Test>{
  return this.httpClient.get<Test>(`${this.baseURL}/${id}`);
}

updateTest(id:number, test: Test):Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, test);
}

deleteTest(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}

}