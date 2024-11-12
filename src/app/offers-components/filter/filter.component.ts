import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() filterOptions: string[] = [];
  @Input() isVisible = false; // Ajout pour recevoir l'état de visibilité du composant parent

  /**
   * Méthode pour afficher le filtre. Peut être utilisée si nécessaire.
   */
  showFilter() {
    this.isVisible = true;
  }

  /**
   * Méthode pour fermer le filtre. Appelée lorsque l'utilisateur clique sur "Appliquer" ou ailleurs.
   */
  closeFilter() {
    this.isVisible = false;
  }
}
