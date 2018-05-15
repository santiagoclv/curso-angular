import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PlaceHolderPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'placeholder',
})
export class PlaceHolderPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, text: string) {
    if(value)
      return text;
    return value;
  }
}
