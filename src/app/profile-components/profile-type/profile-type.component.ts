import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile-type',
  templateUrl: './profile-type.component.html',
  styleUrls: ['./profile-type.component.scss'],
})
export class ProfileTypeComponent {
  userType: string | null = null;

  @Output() userTypeSelected = new EventEmitter<string>();

  selectUserType(type: string) {
    this.userType = type;
    this.userTypeSelected.emit(type);
  }
}
