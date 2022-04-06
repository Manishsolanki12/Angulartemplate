import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { SingleComponent } from './component/single/single.component';
import { FullComponent } from './layout/full/full.component';
import { HalfComponent } from './layout/half/half.component';

const routes: Routes = [{
  path:'home',
  component:FullComponent,
  loadChildren:()=> import('./component/home/home.module').then(m=>m.HomeModule)
  // loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
},
{
  path:'index',
  component:HalfComponent,
  loadChildren:()=> import('./component/index/index.module').then(m=>m.IndexModule)
  // loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
},
{
  path:'contact',
  component:HalfComponent,
  loadChildren:()=> import('./component/contact/contact.module').then(m=>m.ContactModule)

},
{
  path:'about',
  component:HalfComponent,
  loadChildren:()=> import('./component/about/about.module').then(m=>m.AboutModule)
},
{
  path:'portfolio',
  component:HalfComponent,
  loadChildren:()=> import('./component/portfolio/portfolio.module').then(m=>m.PortfolioModule)
},
{
  path:'single',
  component:FullComponent,
  loadChildren:()=> import('./component/single/single.module').then(m=>m.SingleModule)
},
{
  path:'profile',
  loadChildren:()=> import('./component/profile/profile.module').then(m=>m.ProfileModule)
},
{
  path:'shoping',
  component:FullComponent,
  loadChildren:()=> import('./component/shoping/shoping.module').then(m=>m.ShopingModule)
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
