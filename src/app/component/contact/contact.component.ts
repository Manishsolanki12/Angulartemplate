import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formvalue:any={}
  error:boolean=false;


  clickme(invalid:any){
      this.error=true
      if(invalid) return
      console.log(this.formvalue)
  }

}
