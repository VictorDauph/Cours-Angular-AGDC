import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  constructor(private httpClient: HttpClient) { }

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  getPosts(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Erreur HTTP :', error);
        return throwError(() => new Error('Erreur lors de la récupération des posts.'));
      })
    );
  }
  addPost(post: any): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl, post);
  }

  getPostsByUser(userId: number): Observable<any[]> {
    const params = { userId: userId.toString() };
    return this.httpClient.get<any[]>(this.apiUrl, { params });
  }

  getPostsWithHeaders(): Observable<any[]> {
    const headers = { Authorization: 'Bearer token' };
    return this.httpClient.get<any[]>(this.apiUrl, { headers });
  }
}
