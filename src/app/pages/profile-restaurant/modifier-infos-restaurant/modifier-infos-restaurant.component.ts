import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ProfileRestaurantComponent } from '../profile-restaurant.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modifier-infos-restaurant',
  // standalone: true,
  // imports: [],
  templateUrl: './modifier-infos-restaurant.component.html',
  styleUrl: './modifier-infos-restaurant.component.scss'
})
export class ModifierInfosRestaurantComponent {
  @Input()
  infos! :any;
  @Output() cancelEdit = new EventEmitter<void>();
  // @Input() RestaurantInfos!: any;
  newAvantage: string = '';  // Variable to hold the new advantage input

  @ViewChild('inputAvantages') inputAvantages!: ElementRef;
  constructor(private router: Router) {}
  addAvantages() {
    // Optionally get the value from the input field by its id
    const inputValue = this.inputAvantages.nativeElement.value.trim();
    console.log(inputValue);
    if (inputValue) {
      this.infos.avantages.push(inputValue);
      this.newAvantage = '';  // Clear the bound variable, which also clears the input
      console.log(inputValue);
    }
  }
  emailInput = (document.getElementById('emailEdit') as HTMLInputElement)?.value;
  telInput = (document.getElementById('telEdit') as HTMLInputElement)?.value;
  adresseInput = (document.getElementById('adresseEdit') as HTMLInputElement)?.value;
  typeRestoInput = (document.getElementById('typeRestoEdit') as HTMLSelectElement)?.value;
  descriptionInput = (document.getElementById('descriptionEdit') as HTMLTextAreaElement)?.value;
  siteInternetInput = (document.getElementById('siteInternetEdit') as HTMLInputElement)?.value;
  linkdinInput = (document.getElementById('LinkdInEdit') as HTMLInputElement)?.value;
  save() {

    // Mettre à jour `infos` avec les nouvelles valeurs
    this.infos.email = this.infos.email;
    this.infos.tel = this.infos.tel;
    this.infos.adresse = this.infos.adresse;
    this.infos.typeRestaurant = this.infos.typeRestaurant;
    this.infos.description = this.infos.description;
    this.infos.siteInternet = this.infos.siteInternet;
    this.infos.linkdin = this.infos.linkdin;
    this.infos.horaireRestaurant = this.infos.horaireRestaurant

    console.log(
      // Afficher les informations mises à jour
      this.infos.email,
      this.infos.tel,
      this.infos.adresse,
      this.infos.typeRestaurant,
      this.infos.description,
      this.infos.siteInternet,
      this.infos.linkdin,
      this.infos.avantages,
      this.infos.horaireRestaurant
    );
      // `this.infos` fait référence directement à `RestaurantInfos`, donc les valeurs sont mises à jour dans la source
    console.log('Informations mises à jour:', this.infos);
    console.log(this.infos);
    console.log(this.emailInput,this.telInput, this.adresseInput, this.typeRestoInput, this.descriptionInput,this.siteInternetInput, this.linkdinInput);

    this.cancelEdit.emit();

}

  cancel() {
      // Navigue vers la page `restaurant-infos.html`
      // this.router.navigate(['/profile-restaurant']);
      this.cancelEdit.emit();
    }

}
