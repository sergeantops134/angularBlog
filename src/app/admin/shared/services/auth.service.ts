import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {FbAuthResponse, User} from "../../../shared/interfaces";
import {Observable, Subject, throwError} from "rxjs";
import {environment} from "../../../../environments/environment";
import {tap, catchError} from "rxjs/operators";

@Injectable({providedIn: "root"})
export class AuthService {

  public error$: Subject<string> = new Subject<string>();

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
        catchError(this.handleError.bind(this)),
      );
  }

  public logout():void {
      this.setToken(null);
  }

  public isAuthenticated(): boolean {
    return !!this.token;
  }

  private handleError(error: HttpErrorResponse): Observable<HttpErrorResponse> {
      const {message} = error.error.error;


      switch (message) {
        case "INVALID_EMAIL":
          this.error$.next("Invalid email");
          break;
        case "INVALID_PASSWORD":
          this.error$.next("Invalid password");
          break;
        case "EMAIL_NOT_FOUND":
          this.error$.next("Email not found");
          break;
      }

      return throwError(error);
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
