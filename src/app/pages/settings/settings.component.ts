import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  notificationsEnabled: boolean = true;
  publicProfileEnabled: boolean = true;
  showLogoutPopup = false;

  constructor(private router: Router, public dialog: MatDialog) {}

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }


  openLogoutPopup(): void {
    this.showLogoutPopup = true;
  }

  closeLogoutPopup(): void {
    this.showLogoutPopup = false;
  }

  confirmLogout(): void {
    // Ajoutez ici le code pour gérer la déconnexion
    console.log("Déconnecté");
    this.closeLogoutPopup();
  }
}
