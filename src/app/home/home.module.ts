import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { JokeComponent } from './joke/joke.component';

@NgModule({
  declarations: [
    HomeComponent,
    JokeComponent
  ],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
