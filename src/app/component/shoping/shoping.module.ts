import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopingRoutingModule } from './shoping-routing.module';
import { ShopingComponent } from './shoping.component';


@NgModule({
  declarations: [
    ShopingComponent
  ],
  imports: [
    CommonModule,
    ShopingRoutingModule
  ]
})
export class ShopingModule { }
