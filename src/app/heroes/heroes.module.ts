import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    declarations:[
        //aquí va lo que contiene el modulo, componentes, pipes, etc.
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        //Las cosas que quiero que sean visibles afuera de este modulo
        ListadoComponent
    ],
    imports:[
        //Solo van los modulos
        CommonModule 
    ]
})
export class HeroesModule{}
