import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {

  notificationsPreference: number = 1; // Valeur par défaut : 'Oui' (1)
  publicProfile: number = 0; // Valeur par défaut : 'Non' (0)
  @Input() userType: string | null = null; // Type d'utilisateur passé en entrée

  constructor(private http: HttpClient) {}

  // Sauvegarder les préférences de notifications
  saveNotifications() {
    // Créer un FormData
    const formData = new FormData();

    // Ajouter les préférences dans le FormData
    formData.append('notification_mail', this.notificationsPreference.toString());
    formData.append('profil_public', this.publicProfile.toString());

    // Afficher les préférences dans la console pour vérification
    console.log(formData.get('notification_mail'));

    const apiUrl = this.userType === 'candidat'
      ? 'https://jobfiksi.ismael-dev.com/api/candidats/profile/'
      : 'https://jobfiksi.ismael-dev.com/api/restaurants/profile/';

    this.http.put(apiUrl, formData)
      .subscribe(
        response => {
          console.log('Preferences saved successfully:', response);
        },
        error => {
          console.error('Error saving preferences:', error);
        }
      );
  }
}
