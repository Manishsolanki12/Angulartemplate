import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  constructor() {
    window.addEventListener('scroll',function(){
      let header:any = document.querySelector('header');
      header.classList.toggle('scrolling-active',window.scrollY > 300);
  })
  window.addEventListener('scroll',function(){
    let right:any = document.getElementById('inner');
    right.classList.toggle('right-bar',window.scrollY > 300);
})
window.addEventListener('scroll',function(){
  let right:any = document.getElementById('inner');
  right.classList.toggle('right-side',window.scrollY > 2200);
})
  }

  ngOnInit(): void {
  }

}
