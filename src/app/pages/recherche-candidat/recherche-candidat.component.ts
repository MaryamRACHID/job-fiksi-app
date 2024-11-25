import { Component } from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './recherche-candidat.component.html',
  styleUrls: ['./recherche-candidat.component.scss']
})
export class RechercheCandidatComponent {
  // Liste des candidats
  candidatResults = [
    {
      name: 'John Doe',
      location: 'Lyon, France',
      phone: '+33 5698234124',
      description: 'Experienced software engineer with a passion for teaching.',
      skills: ['Java', 'Angular', 'Problem Solving'],
      rating: 4.5,
      photo: 'assets/user-photo.jpg'
    },
    {
      name: 'Jane Smith',
      location: 'Paris, France',
      phone: '+33 674892134',
      description: 'Looking for a part-time job opportunity in customer service.',
      skills: ['Communication', 'Problem Solving'],
      rating: 4.8,
      photo: 'assets/user-photo.jpg'
    },
    {
      name: 'Emily Davis',
      location: 'Nice, France',
      phone: '+33 574892765',
      description: 'Professional with 3 years of experience in marketing.',
      skills: ['Marketing', 'SEO', 'Social Media'],
      rating: 4.2,
      photo: 'assets/user-photo.jpg'
    },
    {
      name: 'Robert Brown',
      location: 'Toulouse, France',
      phone: '+33 495872134',
      description: 'Creative graphic designer specializing in branding.',
      skills: ['Graphic Design', 'Illustrator', 'Photoshop'],
      rating: 4.7,
      photo: 'assets/user-photo.jpg'
    },
    {
      name: 'Michael Johnson',
      location: 'Marseille, France',
      phone: '+33 674892555',
      description: 'Data scientist with expertise in machine learning.',
      skills: ['Python', 'Machine Learning', 'Data Analysis'],
      rating: 4.9,
      photo: 'assets/user-photo.jpg'
    }
  ];

  // Getter pour récupérer les résultats des candidats
  get results() {
    return this.candidatResults;
  }
}
