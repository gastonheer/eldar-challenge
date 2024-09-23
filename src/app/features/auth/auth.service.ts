import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserModel } from '../common/models/userModel';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private users = [
        {
            username: 'heer',
            password: 'admin123',
            role: 'admin',
            permissions: ['create', 'edit']
        },
        {
            username: 'monkey1',
            password: 'goingbananas',
            role: 'user',
            permissions: []
        }
    ];
    private userActions = [
        {
            icon: 'pi pi-power-off',
            label: 'Cerrar sesión',
            action: 'logout'
        },
    ];

    private userSubject = new BehaviorSubject<UserModel | null>(null);
    private rolesSubject = new BehaviorSubject<string[]>([]);
    private permissionsSubject = new BehaviorSubject<string[]>([]);

    currentUser$ = this.userSubject.asObservable();
    roles$ = this.rolesSubject.asObservable();
    permissions$ = this.permissionsSubject.asObservable();

    constructor() { }

    logIn(username: string, pass: string): Observable<boolean> {
        const user = this.users.find(u => u.username === username && u.password === pass);
        if (user) {
            const userModel: UserModel = {
                username: user.username,
                pass: '',
                isAdmin: user.role == 'admin',
                role: user.role,
                permissions: user.permissions
            };
            localStorage.setItem('loggedUser', JSON.stringify({ ...user }));
            this.setRoles([user.role]);
            this.setPermissions(user.permissions);
            this.setUser(userModel);
        }
        return user ? of(true) : of(false);
    }

    logOut() {
        localStorage.removeItem('loggedUser');
        this.userSubject.next(null); 
    }

    getCurrentUser() {
        const user = localStorage.getItem('loggedUser');
        return user ? JSON.parse(user) : null;
    }

    getUserActions() {
        return this.userActions;
    }

    setRoles(roles: string[]) {
        this.rolesSubject.next(roles);
    }

    setPermissions(permissions: string[]) {
        this.permissionsSubject.next(permissions);
    }

    setUser(user: UserModel) {
        this.userSubject.next(user);
    }

}
