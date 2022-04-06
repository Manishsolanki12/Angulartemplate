import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() {
    window.addEventListener('scroll',function(){
      let header:any = document.querySelector('header');
      header.classList.toggle('scrolling-active',window.scrollY > 500);
  })
   }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    rtl: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    // owl-nav:true,
    navSpeed: 700,
    center:true,
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    // autoWidth:true,
    responsive: {
      0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
    },
    nav: true,
    // navText: ["","<i class='fa fa-long-arrow-right'></i>"],
  }

}
