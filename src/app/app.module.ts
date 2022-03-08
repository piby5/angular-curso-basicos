import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


//Decorador
@NgModule({
  
  declarations: [
    //Aquí se colocan los componentes
    AppComponent,
  ],
  imports: [
    //Modulos
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  //Servicios especificos a un modulo
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
