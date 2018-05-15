import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('colorResaltado')
  color: string;

  constructor(private el: ElementRef) {

   }

   //Se utlizan para escuchar sobre los EVENTOS ocurridos a los ELEMENTOS linkeados a la directiva
   @HostListener('mouseenter')
   mouseEntro(){
      this.changeColor(this.color || "blue");
   }

   @HostListener('mouseleave')
   mouseSalio(){
    this.changeColor(null);
   }

  private changeColor(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('click')
   mouseClick(){
    console.log("Click");
   }


}
