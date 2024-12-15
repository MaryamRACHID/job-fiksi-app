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
  @Input() candidat: Candidat | null = null;
  @Input() annoncesAvecRestaurant: { annonce: Annonce; restaurant: Restaurant | null  }[] = [];

  @Input() userType!: string | null;
  @Input() list!: boolean | null;

  ngOnInit(): void {
  }

  constructor(private dataService: DataService, private router: Router) { }

  onCardAnnonceClick(item: any): void {
    this.dataService.setAnnonceAndRestaurant(item.annonce, item.restaurant);
    setTimeout(() => {
      this.router.navigate(['/details']);
    }, 0);
  }


  onCardCandidatClick(candidat: any): void {
    this.dataService.setCandidat(candidat);
    setTimeout(() => {
      this.router.navigate(['/profileCandidatVuParResto']);
    }, 0);
  }


}
