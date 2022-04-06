import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

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
    navText: ['', ''],
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
  customOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    rtl: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    // owl-nav:true
    navSpeed: 700,
    center:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        // nav:true
      },
      100: {
        items: 2,
        // nav:true
      },
      200: {
        items: 3,
        // nav:true
      },
      300: {
        items: 4,
        // nav:true
      },
      400: {
        items: 5,
        // nav:true
      }
      ,
      500: {
        items: 6,
        // nav:true
      }
      ,
      600: {
        items: 7,
        // nav:true
      }
      ,
      700: {
        items: 8,
        // nav:true
      }
    },
    nav: false
  }

}
