import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    SocialComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    SocialComponent
  ]
})
export class SharedModule { }
