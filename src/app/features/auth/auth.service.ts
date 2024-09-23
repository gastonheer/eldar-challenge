import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { UserModel } from '../common/models/userModel';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private users = [
        {
            username: 'admin',
            password: 'test123',
            role: 'admin',
            permissions: ['create', 'edit']
        },
        {
            username: 'eldar',
            password: 'test123',
            role: 'admin',
            permissions: ['create', 'edit']
        },
        {
            username: 'user',
            password: 'test123',
            role: 'user',
            permissions: []
        },
    ];
    private userActions = [
        {
            icon: 'pi pi-power-off',
            label: 'Cerrar sesión',
            action: 'logout'
        },
    ];

    logIn(username: string, pass: string): Observable<UserModel> {
        const user = this.users.find(u => u.username === username && u.password === pass);
        if (user) {
            const userModel: UserModel = {
                username: user.username,
                isAdmin: user.role == 'admin',
                role: user.role,
                permissions: user.permissions
            };
            return of(userModel);
        } else {
            return throwError(() => new Error('Usuario o contraseña incorrectos'));
        }
    }

    getUserActions() {
        return this.userActions;
    }

}
