import { Component, Input } from '@angular/core';
import { ProfileRestaurantComponent } from '../profile-restaurant.component';
@Component({
  selector: 'app-restaurant-infos',
  // standalone: true,
  // imports: [],
  templateUrl: './restaurant-infos.component.html',
  styleUrl: './restaurant-infos.component.scss'
})
export class RestaurantInfosComponent {
  @Input()
  // infos!: { nomEntreprise: string; email: string, tel: string, adresse: string, typeRestaurant: string, description:string,avantages:[],siteInternet:string,linkdin:string};
  infos!:any;
showPopupEditOffre: any;
}
