import { Component, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Annonce, Candidat, Restaurant} from '../../accueil/accueil.component';
import {DataService} from '../../../services/data.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  @Input() details:any;
  isSelected: boolean = false;
  annonce: Annonce | null = null;
  restaurant: Restaurant | null = null;
  candidat: Candidat | null = null;
  id: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService, private userService: UserService) { }


  async ngOnInit(): Promise<void> {
    this.id = localStorage.getItem('userId');
    this.annonce = this.dataService.getAnnonce();       // Récupération de l'annonce
    this.restaurant = this.dataService.getRestaurant(); // Récupération du restaurant
    this.candidat = await this.userService.getUserProfile(Number(this.id));
  }

  toggleSelection() {
    this.isSelected = !this.isSelected;
  }

  postuler(annonce: Annonce, restaurant: Restaurant) {
    this.dataService.setAnnonceAndRestaurant(annonce, restaurant);
    console.log('Annonce:', this.annonce);
    console.log('Restaurant:', this.restaurant);
    console.log('id:', this.candidat);
    this.router.navigate(['/postuler']);

  }
}
