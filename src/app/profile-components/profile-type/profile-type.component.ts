import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-profile-type',
  templateUrl: './profile-type.component.html',
  styleUrl: './profile-type.component.scss'
})
export class ProfileTypeComponent {
  userType: string | null = null;

  @Output() userTypeSelected = new EventEmitter<string>();

  selectUserType(type: string) {
    this.userType = type; // Met à jour le type d'utilisateur localement
    this.userTypeSelected.emit(type); // Émet l'événement
  }

  updateUserType(data: string) {
    this.userType = data; // Mettez à jour le type d'utilisateur
    this.userTypeSelected.emit(data); // Émet l'événement
  }
}
