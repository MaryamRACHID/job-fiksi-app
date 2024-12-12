import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier-infos-restaurant',
  templateUrl: './modifier-infos-restaurant.component.html',
  styleUrl: './modifier-infos-restaurant.component.scss'
})
export class ModifierInfosRestaurantComponent {
  @Input()
  infos! :any;
  @Output() cancelEdit = new EventEmitter<void>();
  // @Input() RestaurantInfos!: any;
  newAvantage: string = '';  // Variable to hold the new advantage input

  @ViewChild('inputAvantages') inputAvantages!: ElementRef;
  constructor(private router: Router) {}
  cancel() {
    // Navigue vers la page `restaurant-infos.html`
    // this.router.navigate(['/profile-restaurant']);
    this.cancelEdit.emit();
  }
}
