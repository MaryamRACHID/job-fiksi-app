import {Component, Input, OnInit} from '@angular/core';
import {Candidat, Restaurant, Annonce} from '../../pages/accueil/accueil.component';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @Input() candidats: Candidat[] = [];
  @Input() restaurants: Restaurant[] = [];
  @Input() annonces: Annonce[] = [];
  @Input() annoncesAvecRestaurant: { annonce: Annonce; restaurant: Restaurant | null  }[] = [];

  @Input() userType!: string | null;
  @Input() list!: boolean | null;

  ngOnInit(): void {
    console.log(this.annoncesAvecRestaurant)
  }

  constructor(private dataService: DataService, private router: Router) { }

  onCardClick(item: any): void {
    // Stocker les données dans le service
    this.dataService.setAnnonceAndRestaurant(item.annonce, item.restaurant);

    // Naviguer vers le composant details
    this.router.navigate(['/details']);
  }
}
