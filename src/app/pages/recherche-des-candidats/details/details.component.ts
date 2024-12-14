import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  @Input() details:any;
  isSelected: boolean = false;
  toggleSelection() {
    this.isSelected = !this.isSelected; // Change l'état entre true et false
  }

  emploiDetails: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.emploiDetails = params;
    });
  }
}
