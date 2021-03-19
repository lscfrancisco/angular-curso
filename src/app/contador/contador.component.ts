import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>

        <button (click)="acumular(base)"> +{{base}} </button>
        <span> {{ numero }} </span>
        <button (click) = "acumular(-base)"> -{{base}} </button>
    `
})
export class ContadorComponent{
    titulo = 'Contador App';
    numero = 10;
  
    sumar(){
      this.numero += 1;
    }
  
    restar(){
      this.numero --;
    }
  
    base: number = 5;
  
    acumular( valor ){
      this.numero += valor;
    } 
    
}