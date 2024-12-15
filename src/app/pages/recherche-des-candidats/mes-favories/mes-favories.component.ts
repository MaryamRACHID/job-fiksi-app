import { Component } from '@angular/core';

@Component({
  selector: 'app-mes-favories',
  templateUrl: './mes-favories.component.html',
  styleUrl: './mes-favories.component.scss'
})
export class MesFavoriesComponent {


  mesFavories = [
    {
      poste:'Serveur H/F',
      entreprise:'Burger King',
      adresse:'Lyon, 69000',
      logo:'/assets/OIP.jpg'
    },
    {
      poste:'Assistant Manager',
      entreprise:'MCDonald\'s',
      adresse:'Paris, 75000',
      logo:'/assets/MCD.png'
    },
    {
      poste:'Préparateur de boissons',
      entreprise:'McDonald\'s',
      adresse:'Paris, 75000',
      logo:'/assets/MCD.png'
    },
    {
      poste:'Barman',
      entreprise:'Otacos',
      adresse:'Lyon, 69000',
      logo:'/assets/OIP.jpg'
    }
  ]

  userType: string | null = null;

  async ngOnInit(): Promise<void> {
    this.userType = localStorage.getItem("userType");
    console.log(this.userType)
  }
}
