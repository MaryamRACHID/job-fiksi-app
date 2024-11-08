import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  @Output() notificationsInfoChange = new EventEmitter<any>();

  notificationsPreference: string = 'yes';
  publicProfile: string = 'no';
  @Input() userType: string | null = null;

  notifications: any = {};

  constructor() {}

  onFinishRegistration() {
    // Handle finish registration action, e.g., save data or finalize the registration process
    console.log('Notifications Preference:', this.notificationsPreference);
    console.log('Public Profile:', this.publicProfile);
  }

  updateNotifications(notifications: any) {
    this.notifications = notifications;
  }

  onNotificationUpdate() {
    this.notificationsInfoChange.emit(this.userType);
  }
}
