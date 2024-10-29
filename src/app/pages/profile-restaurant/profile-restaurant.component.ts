import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-profile-restaurant',
  standalone: true,
  imports: [
    MatIconModule,
    MatChipsModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  templateUrl: './profile-restaurant.component.html',
  styleUrl: './profile-restaurant.component.scss'
})
export class ProfileRestaurantComponent {

}
