import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(
    private http: HttpClient
  ) { }

  getJoke() {
    return this.http.get<string>(environment.jokeUrl);
  }

}
