import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

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
    mouseDrag: false,
    rtl: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    // owl-nav:true,
    navSpeed: 700,
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
        // nav:true
      },
      400: {
        items: 1,
        // nav:true
      },
      740: {
        items: 2,
        // nav:true
      },
      940: {
        items: 2,
        // nav:true
      }
    },
    nav: true
  }

}
