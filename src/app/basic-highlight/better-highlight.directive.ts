import { Directive, ElementRef, OnInit, Renderer2 ,HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor :string = 'transparent';
  @Input() highlightColor : string = 'blue';
  @HostBinding('style.backgroundColor') backgroudColor :string;
  constructor(private renderer : Renderer2, private elRef : ElementRef) { }
  ngOnInit(){
    this.backgroudColor = this.defaultColor;
    //this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','green');
  }
  
  @HostListener('mouseenter') mouseenter(eventData:Event)
  {
    //this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','green');
    this.backgroudColor= this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event)
  {
    //this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','transparent');
    this.backgroudColor= this.defaultColor;
  }
}
