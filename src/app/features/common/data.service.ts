import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

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

  createPost(postData: { title: string; body: string; userId: number }): Promise<any> {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: postData.title,
        body: postData.body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
  }

  updatePost(id: number, postData: { title: string; body: string; userId: number }): Promise<any> {
    return fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        title: postData.title,
        body: postData.body,
        userId: postData.userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.getPosts().subscribe();
      });
  }

  deletePost(id: number): Promise<any> {
    return fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
    });
  }
}
