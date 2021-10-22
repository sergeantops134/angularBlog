import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FbCreateResponse, Post} from "./interfaces";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";


@Injectable({providedIn: "root"})
export class PostsService {
  constructor(
    private http: HttpClient,
  ) {  }

  public create(post: Post): Observable<Post> {
    return this.http.post(`${environment.fbDbUrl}/posts.json`, post)
      .pipe(
        map((responce: FbCreateResponse) => {
          return {
            ...post,
            id: responce.name,
            date: new Date(post.date),
          };
        }),
      );
  }

}
