import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  public name: string;
  public joke: string;
  public loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private jokeService: JokeService
  ) {}

  ngOnInit() {
    this.route.queryParams.pipe(take(1)).subscribe(params => this.name = params.name ? params.name : 'Stranger');
    this.getJoke();
  }

  getJoke() {
    this.loading = true;
    this.jokeService.getJoke().pipe(take(1)).subscribe(
      joke => {
        this.joke = joke;
        this.loading = false;
      },
      () => this.loading = false
    );
  }
}
