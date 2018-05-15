import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pendientes',
  pure: false
})
export class PendientesPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, state: boolean = false) {
    // state podria haber sido un enum
    if(state){
      return value.toUpperCase();
    }
    return value.toLowerCase();
  }
}
