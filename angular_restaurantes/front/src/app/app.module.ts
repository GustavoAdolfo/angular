import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { RestaurantesModule } from './restaurantes/restaurantes.module';
import { PratosModule } from './pratos/pratos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UiModule,
    RestaurantesModule,
    PratosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
