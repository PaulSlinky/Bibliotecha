import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class bhttp {

  private firebaseURL: string = 'https://bibliotecha-6fb78.firebaseio.com/';
  private emailKey: string = '';

  setEmail() {
    const body = JSON.stringify(screen);
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.firebaseURL + '/emails.json', body, {
        headers: headers
      })
      .map((key: Response) => this.emailKey = key.json().name)
  }

  constructor(private http: Http) { }

}
