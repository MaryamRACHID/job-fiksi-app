import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MenuComponent} from "./menu/menu.component";
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    HeaderComponent,
    MenuComponent
  ],
})
export class SharedModule { }
