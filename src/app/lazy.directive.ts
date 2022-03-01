import {Directive, ElementRef, Host, HostBinding, OnInit} from '@angular/core';

@Directive({
  selector: 'img'
})
export class LazyDirective implements OnInit {
  @HostBinding('attr.src') src = null;
  imgSrc!: string;

  constructor(private elementRef: ElementRef<HTMLImageElement>) { }

  ngOnInit() {
    this.imgSrc = this.elementRef.nativeElement.src;

    const observer = new IntersectionObserver(([entry]) => {
      const {isIntersecting} = entry
      if (isIntersecting) {


        const image = new Image();
        image.src = this.imgSrc;
        image.onload = () => {
          const img = this.elementRef.nativeElement;
          img.style.opacity = '1';
          img.src = this.imgSrc;
          observer.unobserve(this.elementRef.nativeElement)
        }
      }
    });

    observer.observe(this.elementRef.nativeElement)
  }

}
