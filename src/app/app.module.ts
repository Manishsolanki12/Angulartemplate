import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FullComponent } from './layout/full/full.component';
import { HalfComponent } from './layout/half/half.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    HeaderComponent,
    FooterComponent,
    FullComponent,
    HalfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
