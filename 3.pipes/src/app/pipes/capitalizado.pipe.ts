import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, todas: boolean = true): any {
        //transform(value: string, ...args: any[]): any {
        // Los tres puntos lo have multi algo jaja
        // tomando todos los valores que le pasan luego de value
        // como un elemento mas de args.

        value = value.toLowerCase();
        let nombres = value.split(" ");

        if (todas){
            // si uso el in, me da el index aparentemente,
            // a diferencia del of, que me da el elemento.
            for(let i in nombres){
                nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
            }
        } else {
            nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
        }


        return nombres.join(" ");
    }
}