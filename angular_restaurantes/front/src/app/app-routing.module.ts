import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { HomeComponent } from './ui/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurantes', component: RestaurantesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
