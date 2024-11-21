import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss'
})
export class SplashScreenComponent {

  constructor(private router: Router) { }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

}
