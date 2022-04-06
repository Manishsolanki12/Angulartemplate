import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { 
    window.addEventListener('scroll',function(){
      let header:any = document.querySelector('header');
      header.classList.toggle('scrolling-active',window.scrollY > 0);
  })
  }

  ngOnInit(): void {
  }

}
