import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector : '[appBasicHighight]'
})
export class basicHighlightDirective implements OnInit{
    constructor(private elementRref : ElementRef)
    {

    }

    ngOnInit(){
        this.elementRref.nativeElement.style.backgroundColor = 'green';
    }
}