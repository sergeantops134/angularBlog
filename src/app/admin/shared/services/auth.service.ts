import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FbAuthResponse, User} from "../../../shared/interfaces";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {tap} from "rxjs/operators";

@Injectable()
export class AuthService {

  public get token():string {
    const expDate: Date = new Date(localStorage.getItem("fb-token-exp"));

    if (new Date() > expDate) {
      this.logout();
      return null;
    }

    return localStorage.getItem("fb-token");
  }
  constructor(private http: HttpClient) {

  }

  public login(user: User): Observable<any> {
    user.returnSecureToken = true;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
      );
  }

  public logout():void {
      this.setToken(null);
  }

  public isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(response: FbAuthResponse | null): void {
      if (response) {
        const expDate: Date = new Date(new Date().getTime() + +response.expiresIn * 1000);
        localStorage.setItem("fb-token", response.idToken);
        localStorage.setItem("fb-token-exp", expDate.toString());
        return;
      }

      localStorage.clear();
  }
}
