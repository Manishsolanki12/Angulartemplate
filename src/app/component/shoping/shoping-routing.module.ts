import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopingComponent } from './shoping.component';

const routes: Routes = [{
  path:'shoping_page', component:ShopingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopingRoutingModule { }
