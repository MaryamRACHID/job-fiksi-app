import { Component, Output, Input, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent {
  @Output() personalInfoChange = new EventEmitter<any>();
  @Input() personalInfo!: { name: string; firstName: string; birthDate: string; city: string; nationality: string };
  @Input() userType: string | null = null;
  searchTerm: string = ''; // User's input in the search field
  dropdownOpen: boolean = false; // To control dropdown visibility

  private selectedFile: File | null = null;
  nationalities: string[] = [
    "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Antiguan and Barbudan", "Argentine", "Armenian", "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", "Belarusian", "Belgian", "Belizean", "Beninese", "Bhutanese", "Bolivian", "Bosnian", "Botswanan", "Brazilian", "Bruneian", "Bulgarian", "Burkinabé", "Burmese", "Burundian", "Cambodian", "Cameroonian", "Canadian", "Cape Verdean", "Central African", "Chadian", "Chilean", "Chinese", "Colombian", "Comoran", "Congolese (Congo-Brazzaville)", "Congolese (Congo-Kinshasa)", "Costa Rican", "Croatian", "Cuban", "Cypriot", "Czech", "Danish", "Djiboutian", "Dominican", "Ecuadorian", "Egyptian", "Emirati", "Equatorial Guinean", "Eritrean", "Estonian", "Eswatini", "Ethiopian", "Fijian", "Finnish", "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Greek", "Grenadian", "Guatemalan", "Guinean", "Guinea-Bissauan", "Guyanese", "Haitian", "Honduran", "Hungarian", "Icelandic", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", "Italian", "Ivorian", "Jamaican", "Japanese", "Jordanian", "Kazakh", "Kenyan", "Kiribati", "Korean (North)", "Korean (South)", "Kosovar", "Kuwaiti", "Kyrgyz", "Lao", "Latvian", "Lebanese", "Lesotho", "Liberian", "Libyan", "Liechtenstein", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malawian", "Malaysian", "Maldivian", "Malian", "Maltese", "Marshallese", "Mauritanian", "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monegasque", "Mongolian", "Montenegrin", "Moroccan", "Mozambican", "Namibian", "Nauruan", "Nepalese", "New Zealander", "Nicaraguan", "Nigerian", "Nigerien", "North Macedonian", "Norwegian", "Omani", "Pakistani", "Palauan", "Palestinian", "Panamanian", "Papua New Guinean", "Paraguayan", "Peruvian", "Philippine", "Polish", "Portuguese", "Qatari", "Romanian", "Russian", "Rwandan", "Saint Kitts and Nevis", "Saint Lucian", "Saint Vincentian", "Samoan", "San Marinese", "Sao Tomean", "Saudi", "Senegalese", "Serbian", "Seychellois", "Sierra Leonean", "Singaporean", "Slovak", "Slovenian", "Solomon Islander", "Somali", "South African", "South Sudanese", "Spanish", "Sri Lankan", "Sudanese", "Surinamese", "Swazi", "Swedish", "Swiss", "Syrian", "Taiwanese", "Tajik", "Tanzanian", "Thai", "Togolese", "Tongan", "Trinidadian", "Tunisian", "Turkish", "Turkmen", "Tuvaluan", "Ugandan", "Ukrainian", "Uruguayan", "Uzbek", "Vanuatuan", "Venezuelan", "Vietnamese", "Yemeni", "Zambian", "Zimbabwean"
  ];

  filteredNationalities: string[] = this.nationalities;

  // Method to filter the nationalities as user types
  filterNationalities() {
    this.filteredNationalities = this.nationalities.filter(nationality =>
      nationality.toLowerCase().startsWith(this.searchTerm.toLowerCase())
    );
  }

  // Method to select a nationality and close dropdown
  selectNationality(nationality: string) {
    this.personalInfo.nationality = nationality;
    this.searchTerm = nationality; // Set input to selected nationality
    this.dropdownOpen = false; // Close dropdown
  }

  // Method to close the dropdown after a short delay to allow click event
  closeDropdown() {
    setTimeout(() => this.dropdownOpen = false, 200);
  }

  // Méthode pour gérer le fichier sélectionné
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];  // Stocke le fichier sélectionné
      console.log('Fichier sélectionné:', this.selectedFile);
    }
  }

  constructor(private http: HttpClient) {}

  // Méthode pour enregistrer les informations et le fichier via une API
  saveInfo() {
    this.personalInfoChange.emit(this.userType);
    const apiUrl = 'https://api.example.com/enregistrer';  // Remplacez par l'URL réelle de l'API

    // Créez un FormData pour envoyer les données et le fichier
    const formData = new FormData();
    formData.append('name', this.personalInfo.name);
    formData.append('firstName', this.personalInfo.firstName);
    formData.append('birthDate', this.personalInfo.birthDate);

    if (this.selectedFile) {
      formData.append('profilePicture', this.selectedFile);  // Ajoute le fichier au FormData
    }

    // Envoie les données via HTTP POST
    this.http.post(apiUrl, formData).subscribe(
      response => {
        console.log('Données et fichier enregistrés avec succès:', response);
      },
      error => {
        console.error('Erreur lors de l\'enregistrement des données et du fichier:', error);
      }
    );
  }
}
