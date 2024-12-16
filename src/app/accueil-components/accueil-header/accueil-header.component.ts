import {Component, EventEmitter, Input, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {FilterComponent} from '../filter/filter.component';
import {Router} from '@angular/router';
import {Annonce, Candidat, Restaurant} from '../../pages/accueil/accueil.component';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-accueil-header',
  templateUrl: './accueil-header.component.html',
  styleUrl: './accueil-header.component.scss'
})
export class AccueilHeaderComponent {
  searchValue: string = '';
  @Input() candidats: Candidat[] = [];
  @Input() annonces: Annonce[] = [];
  candidatsToFilter: Candidat[] = [];
  annoncesToFilter: Annonce[] = [];
  @Input() userType!: string | null;
  @Input() list!: boolean | null;
  @Input() profileCandidat: Candidat | null = null;
  @Input() profileRestaurant: Restaurant | null = null;
  @Output() candidatsFiltered = new EventEmitter<Candidat[]>();  // EventEmitter
  @Output() annoncesFiltered = new EventEmitter<Annonce[]>();  // EventEmitter

  id: string | null = null;

  constructor(private dialog: MatDialog, private router: Router, private userService: UserService) {}

  async ngOnInit(): Promise<void> {
    this.candidatsToFilter = this.candidats;
    this.annoncesToFilter = this.annonces;
    this.id = localStorage.getItem("userId")
    if (this.userType === 'candidat'){
      this.profileCandidat = await this.userService.getUserProfile(Number(this.id))
    } else {
      this.profileRestaurant = await this.userService.getUserProfile(Number(this.id))
    }
  }

  onSearch(): void {
    //console.log('Rechercher :', this.searchValue)
  }

  openFilter(): void {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: '400px',
      data: { userType: this.userType, candidatsToFilter: this.candidats } // Vous passez la liste complète ici
    });

    dialogRef.componentInstance.filteredCandidats.subscribe((filteredCandidats: Candidat[]) => {
      this.candidatsToFilter = filteredCandidats;
      this.candidatsFiltered.emit(this.candidatsToFilter);  // Émettre les candidats filtrés
    });

    dialogRef.componentInstance.filteredAnnonces.subscribe((filteredAnnonces: Annonce[]) => {
      this.annoncesToFilter = filteredAnnonces;
      this.annoncesFiltered.emit(this.annoncesToFilter);  // Émettre les candidats filtrés
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Filtres appliqués :', result);
      }
    });
  }



}
