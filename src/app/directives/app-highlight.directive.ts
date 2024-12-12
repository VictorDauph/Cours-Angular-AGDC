import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  /*
  ElementRef sert à accéder à l’élément DOM auquel s'applique la directive.
  Renderer2 sert à ajouter et retirer des classes dynamiquement sur des éléments du DOM.
  */
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  //effectuer une modification sur l'élément au survol
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.renderer.addClass(this.el.nativeElement, 'closed')
    setTimeout(() => this.renderer.removeClass(this.el.nativeElement, 'closed'), 3000)
  }
}
