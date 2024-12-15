import {Component, EventEmitter, Input, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {FilterComponent} from '../filter/filter.component';
import {Router} from '@angular/router';
import {Candidat, Restaurant} from '../../pages/accueil/accueil.component';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-accueil-header',
  templateUrl: './accueil-header.component.html',
  styleUrl: './accueil-header.component.scss'
})
export class AccueilHeaderComponent {
  searchValue: string = '';
  @Input() userType!: string | null;
  @Input() list!: boolean | null;
  profileCandidat: Candidat | null = null;
  profileRestaurant: Restaurant | null = null;
  id: string | null = null;

  constructor(private dialog: MatDialog, private router: Router, private userService: UserService) {}

  async ngOnInit(): Promise<void> {
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
      data: { userType: this.userType }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Filtres appliqués :', result);
      }
    });
  }

}
