import { Component } from '@angular/core';

@Component({
  selector: 'app-genere-contrat',
  templateUrl: './genere-contrat.component.html',
  styleUrl: './genere-contrat.component.scss'
})
export class GenereContratComponent {



showForm2: boolean=false;
showForm1: boolean=true;
showForm3: boolean=false;
showForm4: boolean=false;

showSection2() {
  this.showForm1=false;
  this.showForm2=true;
  this.showForm4=false;
}

showSection3() {
  this.showForm2=false;
  this.showForm3=true;
  this.showForm1=false;
}

showSection4() {
  this.showForm3=false;
  this.showForm4=true;
  this.showForm2=false;
}

backForm3() {
  this.showForm3=true;
  this.showForm4=false;
}
backForm2() {
  this.showForm2=true;
  this.showForm3=false;
}
backForm1() {
  this.showForm1=true;
  this.showForm2=false;
}
}
