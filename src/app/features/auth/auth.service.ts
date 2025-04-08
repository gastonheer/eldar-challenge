import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { UserModel } from '../common/models/userModel';
import { Store } from '@ngrx/store';
import { AuthActions, AuthReducers, AuthSelectors } from './ngrx/auth.index';

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
    private roles = [
        { label: 'admin', value: '1' },
        { label: 'user', value: '2' }
    ];
    private permissions = ['create', 'edit'];

    constructor(
        private store: Store<AuthReducers.AuthState>,
    ) { }

    logIn(username: string, pass: string): Observable<UserModel> {
        this.store.select(AuthSelectors.selectFeature).subscribe(users => {
            if (users?.users?.length != 0) {
                this.users.concat(userList)
            } else {
                userList = this.users;
            }
        })
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

    getRoles() {
        return this.roles;
    }

    getPermissions() {
        return this.permissions;
    }

    signUp(user: UserModel) {
        return this.store.dispatch(AuthActions.signUp({ user: user }));
    }

}
