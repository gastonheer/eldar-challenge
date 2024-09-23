import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(
    private http: HttpClient,
  ) { }

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getResource(postData: { title: string; body: string; userId: number }): Promise<any> {
    return fetch(this.apiUrl + '/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  createPost(postData: { title: string; body: string; userId: number }): Observable<any> {
    let body = JSON.stringify({
      title: postData.title,
      body: postData.body,
      userId: 1,
    });
    let headers = {
      'Content-type': 'application/json; charset=UTF-8',
    };
    return this.http.post(this.apiUrl, body, { headers }).pipe(
      map((res: any) => res),
      catchError((error) => {
        return throwError(error);  // Lanza el error para que pueda ser manejado
      })
    );
  }

  updatePut(id: number, postData: { title: string; body: string; userId: number }): Observable<any> {
    let body = JSON.stringify({
      id: id,
      title: postData.title,
      body: postData.body,
      userId: postData.userId,
    });
    let headers = {
      'Content-type': 'application/json; charset=UTF-8',
    };
    return this.http.put(this.apiUrl + '/1', body, { headers }).pipe(
      map((res: any) => res),
      catchError((error) => {
        return throwError(error)
      })
    )
  }

  deletePost(id: number): Promise<any> {
    return fetch(this.apiUrl + '/1', {
      method: 'DELETE',
    });
  }
}
