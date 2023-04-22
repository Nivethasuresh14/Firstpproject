import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '.appDatadirective'
})
export class DatadirectiveDirective implements OnInit{

  constructor(private ele :ElementRef) {}
  ngOnInit(): void {
    this.ele.nativeElement.innerText="Text is changed by changeText Directive. ";
    this.ele.nativeElement.style.color = 'red';
    }

   @HostBinding('style.border') border :  string;
   @HostBinding('style.color') color :  string;
   @HostBinding('style.background') background :  string;

   @HostListener('mouseover') 
   onMouseOver() {
     this.border = '5px solid green';
     this.color = 'orange';
     this.background = "yellow";
     console.log("Mouse over")
   }

   @HostListener('mouseout') 
   onMouseOut() {
     this.border = '5px solid red';
     this.color = 'white';
     this.background = "black";
   }

}
