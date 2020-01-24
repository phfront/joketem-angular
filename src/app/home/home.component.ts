import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goJoke() {
    this.router.navigate(['/home/joke'], { queryParams: { name: this.name } });
  }

}
