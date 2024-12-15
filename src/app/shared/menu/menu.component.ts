import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() userType!: string | null;
  typeUser: string | null = null;

  async ngOnInit(): Promise<void> {
    this.typeUser = localStorage.getItem("userType");
    console.log(this.typeUser)
  }
}
