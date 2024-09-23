import { createAction, props } from "@ngrx/store";
import { UserModel } from "../../common/models/userModel";

export const logIn = createAction(
    '[Auth Component] Log In!',
    props<{
        user: string,
        pass: string
    }>()
);

export const logInSuccess = createAction(
    '[Auth Component] Log In Success!',
    props<{ user: UserModel }>()
);

export const logInFailed = createAction(
    '[Auth Component] Log In Failed!',
    props<{ error: string }>()
);

export const logOut = createAction('[Auth component] Log Out!');