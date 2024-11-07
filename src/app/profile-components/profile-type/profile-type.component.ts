import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-profile-type',
  templateUrl: './profile-type.component.html',
  styleUrl: './profile-type.component.scss'
})
export class ProfileTypeComponent {
  userType: string = '';

  @Output() userTypeChange = new EventEmitter<string>();

  selectUserType(type: string) {
    this.userType = type;
  }

  onTypeUpdate() {
    this.userTypeChange.emit(this.userType);
  }
}
