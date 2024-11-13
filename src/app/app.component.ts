import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showAuthContainer: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Surveille la route actuelle pour cacher ou afficher l'auth-container
    this.router.events.subscribe(() => {
      this.showAuthContainer = this.router.url !== '/profile-candidat';
    });
  }
}
