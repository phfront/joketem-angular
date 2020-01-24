import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { JokeComponent } from './joke/joke.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'joke', component: JokeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    JokeComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
