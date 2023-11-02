import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop/desktop.component';
import { MobileComponent } from './mobile/mobile.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';





@NgModule({
  declarations: [
    DesktopComponent,
    MobileComponent
  ],
  imports: [
    CommonModule, SharedModule, ComponentsModule
  ],
  exports: [DesktopComponent, MobileComponent]
})
export class LayoutModule { }
