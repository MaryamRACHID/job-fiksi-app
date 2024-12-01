import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent {
  @Output() bankInfoChange = new EventEmitter<any>();

  @ViewChild('otherDocUploadInput') otherDocUploadInput!: ElementRef;

  @Input() userType: string | null = null;

  otherDocFile: File | null = null;
  rib: string = '';  // Modèle pour le RIB
  iban: string = ''; // Modèle pour l'IBAN
  bic: string = '';  // Modèle pour le BIC

  constructor(private http: HttpClient) {}

  // Handle file selection for bank-related document (RIB)
  onFileChange(event: Event, type: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log(`${type} file selected:`, file);
      if (type === 'rib') {
        this.otherDocFile = file;
      }
    }
  }

  // Save bank-related document (upload to server)
  saveBank() {
    this.bankInfoChange.emit(this.userType);
    const formData = new FormData();

    if (this.otherDocFile) {
      formData.append('ribDocument', this.otherDocFile, this.otherDocFile.name);  // Envoi du fichier RIB
    }
      // Ajout des informations de RIB, IBAN, BIC dans FormData
      formData.append('rib', this.rib);
      formData.append('iban', this.iban);
      formData.append('bic', this.bic);

      console.log(this.iban);

      const apiUrl = 'https://jobfiksi.ismael-dev.com/api/candidats/profile/';  // L'URL de votre API

      this.http.put(apiUrl, formData)
        .subscribe(
          response => {
            console.log('Bank document (RIB) uploaded successfully:', response);
          },
          error => {
            console.error('Error uploading bank document (RIB):', error);
          }
        );
  }

  // Fonction pour sauvegarder les chemins des fichiers dans la base de données
  saveFilePaths(filePaths: { ribDocument: string }) {
    const data = {
      rib_document: filePaths.ribDocument
    };

    const apiUrl = 'https://jobfiksi.ismael-dev.com/api/candidats/profile/';  // API pour mettre à jour la base de données

    this.http.put(apiUrl, data)
      .subscribe(
        response => {
          console.log('File paths saved successfully in the database:', response);
        },
        error => {
          console.error('Error saving file paths to database:', error);
        }
      );
  }
}
