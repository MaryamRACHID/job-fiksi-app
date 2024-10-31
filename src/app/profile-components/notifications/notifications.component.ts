import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  notificationsPreference: string = 'yes'; // Default value
  publicProfile: string = 'no'; // Default value
  @Input() userType: string | null = null; // Propriété pour recevoir le type de profil

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
}
