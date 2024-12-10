import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-no-messages',
  templateUrl: './no-messages.component.html',
  styleUrl: './no-messages.component.scss'
})
export class NoMessagesComponent {

  constructor(private router: Router) {}

  messagerie(){
    this.router.navigate(['/messagerie']);
  }

}
