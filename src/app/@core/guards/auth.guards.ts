// import { Injectable } from "@angular/compiler/src/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../service/api/auth.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class AuthGuard implements CanActivate{
    constructor(
        private readonly authService : AuthService,
        private readonly router : Router,
    ){}
 canActivate(): boolean{
    if(this.authService.isLoggedIn()){
        return true;
    }else{
        this.router.navigate(['/login']).then();
        return true;
    }
    // return this.canActivate();

 }
 canActivaeChild(): boolean{
    return this.canActivaeChild();
 }
}