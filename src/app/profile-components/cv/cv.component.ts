import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  @Output() cvInfoChange = new EventEmitter<any>();

  @ViewChild('cvUploadInput') cvUploadInput!: ElementRef;
  @ViewChild('coverLetterUploadInput') coverLetterUploadInput!: ElementRef;
  @ViewChild('otherDocUploadInput') otherDocUploadInput!: ElementRef;

  @Input() userType: string | null = null;

  cvFile: File | null = null;
  coverLetterFile: File | null = null;
  otherDocumentFile: File | null = null;

  constructor(private http: HttpClient) {}

  // Handle file selection
  onFileChange(event: Event, type: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log(`${type} file selected:`, file);
      if (type === 'cv') {
        this.cvFile = file;
      } else if (type === 'coverLetter') {
        this.coverLetterFile = file;
      } else if (type === 'other') {
        this.otherDocumentFile = file;
      }
    }
  }

  // Save CV and related documents (upload to server)
  saveCV() {
    this.cvInfoChange.emit(this.userType);

    // Vérifier si un fichier a été sélectionné
    if (this.cvFile || this.coverLetterFile || this.otherDocumentFile) {
      const formData = new FormData();
      if (this.cvFile) formData.append('cv', this.cvFile, this.cvFile.name);
      if (this.coverLetterFile) formData.append('lettre_motivation', this.coverLetterFile, this.coverLetterFile.name);
      if (this.otherDocumentFile) formData.append('autres_documents', this.otherDocumentFile, this.otherDocumentFile.name);

      // API URL pour télécharger les fichiers
      const apiUrl = 'https://jobfiksi.ismael-dev.com/api/candidats/profile/';

      // Envoi des fichiers vers le serveur
      this.http.put(apiUrl, formData)
        .subscribe(
          (response: any) => {
            console.log('Files uploaded successfully:', response);
            // Si les fichiers sont envoyés avec succès, enregistrer les chemins dans la base de données
            const filePaths = {
              cv: response?.cvPath, // Assurez-vous que le serveur renvoie ces chemins
              coverLetter: response?.coverLetterPath,
              otherDocument: response?.otherDocumentPath
            };

            // Enregistrez ces chemins dans la base de données (en envoyant une autre requête POST ou PUT à votre API)
            this.saveFilePaths(filePaths);
          },
          error => {
            console.error('Error uploading files:', error);
          }
        );
    } else {
      console.log('No files selected for upload.');
    }
  }

  // Sauvegarder les chemins des fichiers dans la base de données
  saveFilePaths(filePaths: { cv: string, coverLetter: string, otherDocument: string }) {
    const data = {
      cv: filePaths.cv,
      lettre_motifation: filePaths.coverLetter,
      autres_documents: filePaths.otherDocument
    };

    const apiUrl = 'https://jobfiksi.ismael-dev.com/api/candidats/profile/';

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
