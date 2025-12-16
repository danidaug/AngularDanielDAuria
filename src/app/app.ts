import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Daniel DAuria');

  ngOnInit(){
    //EJERCICIO 1
    const nombre:string = 'Daniel';
    const edad: number = 19;
    const activo : boolean = true;

    //EJERCICIO 2
    function calcularAreaRectangulo( a:number,b:number):number{
      return a*b;
    }
    console.log(calcularAreaRectangulo(5,10));

    //EJERCICO 3
    interface Persona{
        nombre: string
        edad: number
        correo: string
    }

    let usuario :Persona={nombre: 'alex',edad:18,correo:'alexfonta@gmail.com'};
    console.log(usuario);
    let id: string | number = '29';

    //EJERCICIO 4
    function analizarId(id: string | number):string{
        if(typeof id === 'string'){
            return 'Es de tipo string.';
        }else{
            return 'Es de tipo number';
        }
    }

    console.log(analizarId(id));

    //EJERCICIO 5
    const numeros: number[] = [40, 1, 5, 200, 3];

    function ordenar(numeros:number[]):number[]{
        numeros.sort((a, b) => a - b);
        return numeros;
    }

    console.log(ordenar(numeros))

  }
}
