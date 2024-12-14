import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MenuComponent} from "./menu/menu.component";
import { MatIconModule } from '@angular/material/icon';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    MenuComponent
  ],
})
export class SharedModule { }
