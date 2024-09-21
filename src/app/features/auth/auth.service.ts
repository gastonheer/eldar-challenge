// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private users = [
        {
            username: 'heer',
            password: 'admin123',
            role: 'admin'
        },
        {
            username: 'monkey1',
            password: 'goingbananas',
            role: 'user'
        }
    ];

    constructor(private http: HttpClient) { }

    logIn(username: string, pass: string): Observable<boolean> {
        const user = this.users.find(u => u.username === username && u.password === pass);
        if (user) {
            localStorage.setItem('loggedUser', JSON.stringify({ ...user }));
        }
        return user ? of(true) : of(false);
    }

    getCurrentUser() {
        const user = localStorage.getItem('loggedUser');
        return user ? JSON.parse(user) : null;
    }
}
