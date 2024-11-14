import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss'
})
export class FirstPageComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Navigate to Splash Screen after 5 seconds
    setTimeout(() => {
      this.router.navigate(['/splash-screen']);
    }, 4000);
  }

}
