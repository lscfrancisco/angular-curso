import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['spiderman','ironman','hulk','thor','Antman'];
  heroesBorrados: string[] = [];

  constructor() {
    console.log('constructor');
   }

   borrar(){
     console.log('Borrando');
     const heroeBorrado = this.heroes.shift();
     console.log( heroeBorrado );
     this.heroesBorrados.push (heroeBorrado);
     console.log( this.heroesBorrados );
   }

}
