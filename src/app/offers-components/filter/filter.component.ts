import { Component, inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  readonly dialogRef = inject(MatDialogRef<FilterComponent>);

  sectionStates: Record<string, boolean> = {
    sortBy: true,
    educationLevel: true,
    location: true,
    availability: true,
    specialization: true,
  };
  

  educationLevels = ['Master1/Master2', 'BAC+3', 'BAC+2', 'Licence', 'BAC', '+'];
  locations = ['Paris', 'Lyon', 'Rennes', 'Nantes'];
  availabilityOptions = ['Tout de suite', 'Dans les 3 prochains jours', 'Prochaines semaines', 'Prochain mois'];
  specializations = ['Serveur', 'Livreur', 'Nettoyage', 'Chef'];

  ngOnInit() {
    console.log("Filter component initialized.");
  }

  toggleSection(section: string) {
    this.sectionStates[section] = !this.sectionStates[section];
  }

  closeFilter() {
    this.dialogRef.close();
  }
}
