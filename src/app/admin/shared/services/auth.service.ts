import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FbAuthResponse, User} from "../../../shared/interfaces";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {tap} from "rxjs/operators";

@Injectable()
export class AuthService {

  public get token():string {
    return '';
  }
  constructor(private http: HttpClient) {

  }

  public login(user: User): Observable<any> {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
      );
  }

  public logout():void {

  }

  public isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(response: FbAuthResponse): void {

  }
}
